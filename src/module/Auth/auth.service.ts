import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import { ILoginUserPayload, IRegisterPayload, IVerifyEmailPayload } from "./auth.interface";
import httpStatus from "http-status"
import bcrypt from "bcryptjs"
import config from "../../config";
import { UserRole } from "../../generated/prisma/enums";
import { redisClient } from "../../lib/redis";
import crypto from "crypto";
import path from "path";
import { transporter } from "../../lib/nodemailer";
import ejs from "ejs"
import { jwtUtils } from "../../utils/jwt";
import { SignOptions } from "jsonwebtoken";
const registrationUser= async (payload:IRegisterPayload)=>{
    const {name,email,password,phone}=payload

    const existingUser = await prisma.user.findUnique({
        where:{
            email
        }
    })
    if (existingUser){
        throw new AppError(httpStatus.CONFLICT, "User already exists with this email")
    }

    const hashPassword = await bcrypt.hash(password,Number(config.bcrypt_salt_rounds))
    const expirationSeconds = 5 * 60;
	const otp = crypto.randomInt(100000, 1000000).toString();

	await redisClient.set(`registration-otp:${email}`, otp, {
		expiration: { type: "EX", value: expirationSeconds },
	});

	await redisClient.set(
		`registration-data:${email}`,
		JSON.stringify({ name: payload.name, email, password: hashPassword, phone: payload.phone }),
		{ expiration: { type: "EX", value: expirationSeconds } },
	);

	const templatePath = path.join(process.cwd(), "src/templates/registration-otp.ejs");
	const html = await ejs.renderFile(templatePath, {
		name: payload.name,
		otp,
		expirationMinutes: expirationSeconds / 60,
	});

	await transporter.sendMail({
		from: config.email_sender,
		to: email,
		subject: "Verify your email - Emergency Ambulance Dispatch",
		html,
	});
    

}

const verifyEmail = async (payload: IVerifyEmailPayload) => {
	const { otp } = payload;
	const email = payload.email.trim().toLowerCase();

	
	const isUserExist = await prisma.user.findUnique({
		where: { email },
	});

	if (isUserExist) {
		if (!isUserExist.isActive) {
			throw new AppError(httpStatus.FORBIDDEN, "User is inactive");
		}

		if (isUserExist.emailVerified) {
			throw new AppError(
				httpStatus.CONFLICT,
				"Email Already Verified. Please login.",
			);
		}
	}

	
	const otpKey = `registration-otp:${email}`;

	const redisOtp = await redisClient.get(otpKey);

	if (!redisOtp) {
		throw new AppError(httpStatus.BAD_REQUEST, "Invalid OTP");
	}

	if (redisOtp !== otp) {
		throw new AppError(httpStatus.BAD_REQUEST, "OTP Does Not Match");
	}

	await redisClient.del(otpKey);

	
	const registrationKey = `registration-data:${email}`;

	const redisUserData = await redisClient.get(registrationKey);

	if (!redisUserData) {
		throw new AppError(httpStatus.NOT_FOUND, "Registration data not found");
	}

	const userPayload = JSON.parse(redisUserData);

	
	const createdUser = await prisma.user.create({
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

	await redisClient.del(registrationKey);


	const templatePath = path.join(
		process.cwd(),
		"src/templates/welcome-email.ejs",
	);

	const templateData = {
		name: createdUser.name,
	};

	const html = await ejs.renderFile(templatePath, templateData);

	await transporter.sendMail({
		from: config.email_sender,
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
        throw new AppError(httpStatus.FORBIDDEN, "Please verify your email first.");
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
        throw new AppError(httpStatus.NOT_FOUND, "User not found");
    }

    return isUserExists;
};
export const AuthService = {
    registrationUser,
    verifyEmail,
	loginUser,
	getMe,
}