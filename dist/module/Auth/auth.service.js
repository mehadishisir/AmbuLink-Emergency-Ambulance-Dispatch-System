"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
const http_status_1 = __importDefault(require("http-status"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = __importDefault(require("../../config"));
const enums_1 = require("../../generated/prisma/enums");
const redis_1 = require("../../lib/redis");
const crypto_1 = __importDefault(require("crypto"));
const path_1 = __importDefault(require("path"));
const nodemailer_1 = require("../../lib/nodemailer");
const ejs_1 = __importDefault(require("ejs"));
const jwt_1 = require("../../utils/jwt");
const registrationUser = async (payload) => {
    const { name, email, password, phone } = payload;
    const existingUser = await prisma_1.prisma.user.findUnique({
        where: {
            email
        }
    });
    if (existingUser) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "User already exists with this email");
    }
    const hashPassword = await bcryptjs_1.default.hash(password, Number(config_1.default.bcrypt_salt_rounds));
    const expirationSeconds = 5 * 60;
    const otp = crypto_1.default.randomInt(100000, 1000000).toString();
    await redis_1.redisClient.set(`registration-otp:${email}`, otp, {
        expiration: { type: "EX", value: expirationSeconds },
    });
    await redis_1.redisClient.set(`registration-data:${email}`, JSON.stringify({ name: payload.name, email, password: hashPassword, phone: payload.phone }), { expiration: { type: "EX", value: expirationSeconds } });
    const templatePath = path_1.default.join(process.cwd(), "src/templates/registration-otp.ejs");
    const html = await ejs_1.default.renderFile(templatePath, {
        name: payload.name,
        otp,
        expirationMinutes: expirationSeconds / 60,
    });
    await nodemailer_1.transporter.sendMail({
        from: config_1.default.email_sender,
        to: email,
        subject: "Verify your email - Emergency Ambulance Dispatch",
        html,
    });
};
const verifyEmail = async (payload) => {
    const { otp } = payload;
    const email = payload.email.trim().toLowerCase();
    const isUserExist = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (isUserExist) {
        if (!isUserExist.isActive) {
            throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "User is inactive");
        }
        if (isUserExist.emailVerified) {
            throw new AppError_1.AppError(http_status_1.default.CONFLICT, "Email Already Verified. Please login.");
        }
    }
    const otpKey = `registration-otp:${email}`;
    const redisOtp = await redis_1.redisClient.get(otpKey);
    if (!redisOtp) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Invalid OTP");
    }
    if (redisOtp !== otp) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "OTP Does Not Match");
    }
    await redis_1.redisClient.del(otpKey);
    const registrationKey = `registration-data:${email}`;
    const redisUserData = await redis_1.redisClient.get(registrationKey);
    if (!redisUserData) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Registration data not found");
    }
    const userPayload = JSON.parse(redisUserData);
    const createdUser = await prisma_1.prisma.user.create({
        data: {
            name: userPayload.name,
            email: userPayload.email,
            password: userPayload.password,
            phone: userPayload.phone,
            role: enums_1.UserRole.PATIENT,
            emailVerified: true,
        },
        omit: { password: true },
    });
    await redis_1.redisClient.del(registrationKey);
    const templatePath = path_1.default.join(process.cwd(), "src/templates/welcome-email.ejs");
    const templateData = {
        name: createdUser.name,
    };
    const html = await ejs_1.default.renderFile(templatePath, templateData);
    await nodemailer_1.transporter.sendMail({
        from: config_1.default.email_sender,
        to: email,
        subject: "Welcome to AmbuLink",
        html,
    });
    const jwtPayload = {
        userId: createdUser.id,
        name: createdUser.name,
        email: createdUser.email,
        role: createdUser.role,
    };
    const accessToken = jwt_1.jwtUtils.createToken(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires_in);
    const refreshToken = jwt_1.jwtUtils.createToken(jwtPayload, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expires_in);
    return {
        user: createdUser,
        accessToken,
        refreshToken,
    };
};
const loginUser = async (payload) => {
    const { password, email: rawEmail } = payload;
    const email = rawEmail.trim().toLowerCase();
    const user = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "User Not Found");
    }
    if (!user.isActive) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "User is inactive");
    }
    if (!user.emailVerified) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "Please verify your email first.");
    }
    // google auth
    if (user.password === null && user.googleId) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "User Already Has Account Registered With Google. Try To Login With Google.");
    }
    const isPasswordMatched = await bcryptjs_1.default.compare(password, user.password);
    if (!isPasswordMatched) {
        throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, "Invalid credentials");
    }
    const jwtPayload = {
        userId: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
    };
    const accessToken = jwt_1.jwtUtils.createToken(jwtPayload, config_1.default.jwt_access_secret, config_1.default.jwt_access_expires_in);
    const refreshToken = jwt_1.jwtUtils.createToken(jwtPayload, config_1.default.jwt_refresh_secret, config_1.default.jwt_refresh_expires_in);
    return {
        accessToken,
        refreshToken,
    };
};
const getMe = async (userId) => {
    const isUserExists = await prisma_1.prisma.user.findUnique({
        where: {
            id: userId,
        },
        include: {
            driverProfile: true,
        },
        omit: {
            password: true,
        },
    });
    if (!isUserExists) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "User not found");
    }
    return isUserExists;
};
const resendOtp = async (email) => {
    const user = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "User not found!");
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
    await prisma_1.prisma.user.update({
        where: { email },
        data: {
            otp,
            otpExpiresAt,
        },
    });
};
const forgotPassword = async (payload) => {
    const { email } = payload;
    const user = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "User not found with this email!");
    }
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const otpExpiresAt = new Date(Date.now() + 5 * 60 * 1000);
    await prisma_1.prisma.user.update({
        where: { email },
        data: {
            otp,
            otpExpiresAt,
        },
    });
};
const resetPassword = async (payload) => {
    const { email, otp, newPassword } = payload;
    const user = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "User not found!");
    }
    if (user.otp !== otp) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Invalid OTP!");
    }
    if (user.otpExpiresAt && new Date() > new Date(user.otpExpiresAt)) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "OTP has expired!");
    }
    const hashedPassword = await bcryptjs_1.default.hash(newPassword, 12);
    await prisma_1.prisma.user.update({
        where: { email },
        data: {
            password: hashedPassword,
            otp: null,
            otpExpiresAt: null,
        },
    });
    return { message: "Password changed successfully" };
};
exports.AuthService = {
    registrationUser,
    verifyEmail,
    loginUser,
    getMe,
    resendOtp,
    forgotPassword,
    resetPassword,
};
//# sourceMappingURL=auth.service.js.map