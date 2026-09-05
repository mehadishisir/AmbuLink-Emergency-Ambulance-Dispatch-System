import { z } from "zod";

const registerValidationSchema = z.object({
	body: z.object({
		name: z.string({ required_error: "Name is required" }).min(2),
		email: z.string({ required_error: "Email is required" }).email(),
		password: z
			.string({ required_error: "Password is required" })
			.min(6, "Password must be at least 6 characters"),
		phone: z.string({ required_error: "Phone is required" }),
	}),
});

const verifyEmailValidationSchema = z.object({
	body: z.object({
		email: z.string({ required_error: "Email is required" }).email(),
		otp: z.string({ required_error: "OTP is required" }).length(6),
	}),
});

const resendOtpValidationSchema = z.object({
	body: z.object({
		email: z.string({ required_error: "Email is required" }).email(),
	}),
});

const loginValidationSchema = z.object({
	body: z.object({
		email: z.string({ required_error: "Email is required" }).email(),
		password: z.string({ required_error: "Password is required" }),
	}),
});

const refreshTokenValidationSchema = z.object({
	body: z.object({
		refreshToken: z.string({ required_error: "Refresh token is required" }),
	}),
});

const forgotPasswordValidationSchema = z.object({
	body: z.object({
		email: z.string({ required_error: "Email is required" }).email(),
	}),
});

const resetPasswordValidationSchema = z.object({
	body: z.object({
		email: z.string({ required_error: "Email is required" }).email(),
		otp: z.string({ required_error: "OTP is required" }).length(6),
		newPassword: z
			.string({ required_error: "New password is required" })
			.min(6, "Password must be at least 6 characters"),
	}),
});

export const AuthValidation = {
	registerValidationSchema,
	verifyEmailValidationSchema,
	resendOtpValidationSchema,
	loginValidationSchema,
	refreshTokenValidationSchema,
	forgotPasswordValidationSchema,
	resetPasswordValidationSchema,
};