import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import {
  ILoginUserPayload,
  IRegisterPayload,
  IVerifyEmailPayload,
} from "./auth.interface";
import httpStatus from "http-status";
import bcrypt from "bcryptjs";
import config from "../../config";
import { UserRole } from "../../generated/prisma/enums";
import { redisClient } from "../../lib/redis";
import crypto from "crypto";
import path from "path";
import { transporter } from "../../lib/nodemailer";
import ejs from "ejs";
import { jwtUtils } from "../../utils/jwt";
import { SignOptions } from "jsonwebtoken";

const registrationUser = async (payload: IRegisterPayload) => {
  const { name, email, password, phone } = payload;

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    throw new AppError(
      httpStatus.CONFLICT,
      "User already exists with this email",
    );
  }

  const hashPassword = await bcrypt.hash(
    password,
    Number(config.bcrypt_salt_rounds),
  );

  const expirationSeconds = 5 * 60;
  const otp = crypto.randomInt(100000, 1000000).toString();
  const otpExpiresAt = new Date(Date.now() + expirationSeconds * 1000);

  // ✅ Try Redis first (local), fallback to DB (Vercel)
  let storedInRedis = false;
  try {
    if (redisClient.isOpen) {
      await redisClient.set(`registration-otp:${email}`, otp, {
        expiration: { type: "EX", value: expirationSeconds },
      });
      await redisClient.set(
        `registration-data:${email}`,
        JSON.stringify({
          name,
          email,
          password: hashPassword,
          phone,
        }),
        { expiration: { type: "EX", value: expirationSeconds } },
      );
      storedInRedis = true;
    }
  } catch (err) {
    console.warn("Redis unavailable, falling back to DB:", err);
  }

  // ✅ Fallback: store in DB (Vercel-compatible)
  if (!storedInRedis) {
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashPassword,
        phone,
        role: UserRole.PATIENT,
        emailVerified: false,
        otp,
        otpExpiresAt,
      },
    });
  }

  // Send email (best-effort — don't crash if it fails)
  try {
    const templatePath = path.join(
      process.cwd(),
      "src/templates/registration-otp.ejs",
    );
    const html = await ejs.renderFile(templatePath, {
      name,
      otp,
      expirationMinutes: expirationSeconds / 60,
    });

    await transporter.sendMail({
      from: config.email_sender,
      to: email,
      subject: "Verify your email - Emergency Ambulance Dispatch",
      html,
    });
  } catch (err) {
    console.error("Email send failed (ignored):", err);
  }

  console.log(`OTP for ${email}: ${otp}`);

  // Return OTP for demo/evaluation convenience
  return { email, otp };
};

const verifyEmail = async (payload: IVerifyEmailPayload) => {
  const { otp } = payload;
  const email = payload.email.trim().toLowerCase();

  const user = await prisma.user.findUnique({ where: { email } });

  if (user?.emailVerified) {
    throw new AppError(
      httpStatus.CONFLICT,
      "Email already verified. Please login.",
    );
  }

  // ✅ Try Redis first
  let redisVerified = false;
  try {
    if (redisClient.isOpen) {
      const redisOtp = await redisClient.get(`registration-otp:${email}`);
      if (redisOtp) {
        if (redisOtp !== otp) {
          throw new AppError(httpStatus.BAD_REQUEST, "OTP does not match");
        }
        redisVerified = true;
      }
    }
  } catch (err) {
    if (err instanceof AppError) throw err;
    console.warn("Redis unavailable, checking DB:", err);
  }

  let createdUser;

  if (redisVerified) {
    // Redis path (local)
    await redisClient.del(`registration-otp:${email}`);
    const redisUserData = await redisClient.get(`registration-data:${email}`);
    if (!redisUserData) {
      throw new AppError(httpStatus.NOT_FOUND, "Registration data not found");
    }
    const userPayload = JSON.parse(redisUserData);
    await redisClient.del(`registration-data:${email}`);

    createdUser = await prisma.user.create({
      data: {
        name: userPayload.name,
        email: userPayload.email,
        password: userPayload.password,
        phone: userPayload.phone,
        role: UserRole.PATIENT,
        emailVerified: true,
      },
      omit: { password: true },
    });
  } else {
    // DB path (Vercel)
    if (!user) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        "User not found. Please register again.",
      );
    }
    if (!user.otp || user.otp !== otp) {
      throw new AppError(httpStatus.BAD_REQUEST, "Invalid OTP");
    }
    if (user.otpExpiresAt && new Date() > new Date(user.otpExpiresAt)) {
      throw new AppError(httpStatus.BAD_REQUEST, "OTP has expired");
    }
    createdUser = await prisma.user.update({
      where: { email },
      data: {
        emailVerified: true,
        otp: null,
        otpExpiresAt: null,
      },
      omit: { password: true },
    });
  }

  // Welcome email (best-effort)
  try {
    const templatePath = path.join(
      process.cwd(),
      "src/templates/welcome-email.ejs",
    );
    const html = await ejs.renderFile(templatePath, {
      name: createdUser.name,
    });
    await transporter.sendMail({
      from: config.email_sender,
      to: email,
      subject: "Welcome to AmbuLink",
      html,
    });
  } catch (err) {
    console.error("Welcome email failed (ignored):", err);
  }

  const jwtPayload = {
    userId: createdUser.id,
    name: createdUser.name,
    email: createdUser.email,
    role: createdUser.role,
  };

  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_access_secret,
    config.jwt_access_expires_in as SignOptions,
  );

  const refreshToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_refresh_secret,
    config.jwt_refresh_expires_in as SignOptions,
  );

  return {
    user: createdUser,
    accessToken,
    refreshToken,
  };
};

const loginUser = async (payload: ILoginUserPayload) => {
  const { password, email: rawEmail } = payload;
  const email = rawEmail.trim().toLowerCase();

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User Not Found");
  }

  if (!user.isActive) {
    throw new AppError(httpStatus.FORBIDDEN, "User is inactive");
  }

  if (!user.emailVerified) {
    throw new AppError(
      httpStatus.FORBIDDEN,
      "Please verify your email first.",
    );
  }

  // google auth
  if (user.password === null && (user as any).googleId) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "User Already Has Account Registered With Google. Try To Login With Google.",
    );
  }

  const isPasswordMatched = await bcrypt.compare(
    password,
    user.password as string,
  );

  if (!isPasswordMatched) {
    throw new AppError(httpStatus.UNAUTHORIZED, "Invalid credentials");
  }

  const jwtPayload = {
    userId: user.id,
    name: user.name,
    email: user.email,
    role: user.role,
  };

  const accessToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_access_secret,
    config.jwt_access_expires_in as SignOptions,
  );

  const refreshToken = jwtUtils.createToken(
    jwtPayload,
    config.jwt_refresh_secret,
    config.jwt_refresh_expires_in as SignOptions,
  );

  return {
    accessToken,
    refreshToken,
  };
};

const getMe = async (userId: string) => {
  const isUserExists = await prisma.user.findUnique({
    where: { id: userId },
    include: { driverProfile: true },
    omit: { password: true },
  });

  if (!isUserExists) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  return isUserExists;
};

const resendOtp = async (email: string) => {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found!");
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await prisma.user.update({
    where: { email },
    data: { otp, otpExpiresAt },
  });

  // Send email (best-effort)
  try {
    const templatePath = path.join(
      process.cwd(),
      "src/templates/registration-otp.ejs",
    );
    const html = await ejs.renderFile(templatePath, {
      name: user.name,
      otp,
      expirationMinutes: 5,
    });
    await transporter.sendMail({
      from: config.email_sender,
      to: email,
      subject: "Your new OTP - Emergency Ambulance Dispatch",
      html,
    });
  } catch (err) {
    console.error("Resend OTP email failed:", err);
  }

  console.log(`Resent OTP for ${email}: ${otp}`);
  return { email, otp };
};

const forgotPassword = async (payload: { email: string }) => {
  const { email } = payload;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "User not found with this email!",
    );
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);

  await prisma.user.update({
    where: { email },
    data: { otp, otpExpiresAt },
  });
};

const resetPassword = async (payload: {
  email: string;
  otp: string;
  newPassword: string;
}) => {
  const { email, otp, newPassword } = payload;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found!");
  }

  if (user.otp !== otp) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid OTP!");
  }

  if (user.otpExpiresAt && new Date() > new Date(user.otpExpiresAt)) {
    throw new AppError(httpStatus.BAD_REQUEST, "OTP has expired!");
  }

  const hashedPassword = await bcrypt.hash(newPassword, 12);

  await prisma.user.update({
    where: { email },
    data: {
      password: hashedPassword,
      otp: null,
      otpExpiresAt: null,
    },
  });

  return { message: "Password changed successfully" };
};

export const AuthService = {
  registrationUser,
  verifyEmail,
  loginUser,
  getMe,
  resendOtp,
  forgotPassword,
  resetPassword,
};