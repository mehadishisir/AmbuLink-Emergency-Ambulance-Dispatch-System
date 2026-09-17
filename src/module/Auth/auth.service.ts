import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import { IRegisterPayload } from "./auth.interface";
import httpStatus from "http-status"
import bcrypt from "bcryptjs"
import config from "../../config";
import { UserRole } from "../../generated/prisma/enums";
import { redisClient } from "../../lib/redis";
import crypto from "crypto";
import path from "path";
import { transporter } from "../../lib/nodemailer";
import ejs from "ejs"
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

export const AuthService = {
    registrationUser
}