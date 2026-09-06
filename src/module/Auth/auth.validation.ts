import z from "zod";

const RegisterZodSchema = z.object({
	name: z
		.string("Not A String!!!!!")
		.min(3, "Name must atleast 3 characters long!!!")
		.max(50),
	email: z.email("Not email!!"),
	password: z
		.string()
		.min(8, "Password Must Minimum 8 Characters Long.")
		.regex(/[a-z]/, "Password must contain atleast 1 Lowercase Letter")
		.regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter")
		.regex(/[0-9]/, "Password must contain atleast 1 Number")
		.regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 Special Character"),
	phone: z.string("Not A String!!!!!").min(11, "Not A Valid Phone Number!!!"),
});

const VerifyEmailZodSchema = z.object({
	email: z.email("Not email!!"),
	otp: z.string().length(6),
});

const ResendOtpZodSchema = z.object({
	email: z.email("Not email!!"),
});

const LoginZodSchema = z.object({
	email: z.email("Not email!!"),
	password: z
		.string()
		.min(8, "Password Must Minimum 8 Characters Long.")
		.regex(/[a-z]/, "Password must contain atleast 1 Lowercase Letter")
		.regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter")
		.regex(/[0-9]/, "Password must contain atleast 1 Number")
		.regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 Special Character"),
});

const RefreshTokenZodSchema = z.object({
	refreshToken: z.string("Not A String!!!!!"),
});

const ForgotPasswordZodSchema = z.object({
	email: z.email("Not email!!"),
});

const ResetPasswordZodSchema = z.object({
	email: z.email("Not email!!"),
	newPassword: z
		.string()
		.min(8, "Password Must Minimum 8 Characters Long.")
		.regex(/[a-z]/, "Password must contain atleast 1 Lowercase Letter")
		.regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter")
		.regex(/[0-9]/, "Password must contain atleast 1 Number")
		.regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 Special Character"),
	otp: z.string().length(6),
});

export const AuthValidation = {
	RegisterZodSchema,
	VerifyEmailZodSchema,
	ResendOtpZodSchema,
	LoginZodSchema,
	RefreshTokenZodSchema,
	ForgotPasswordZodSchema,
	ResetPasswordZodSchema,
};