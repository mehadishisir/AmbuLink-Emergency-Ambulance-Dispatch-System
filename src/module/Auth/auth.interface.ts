export type IRegisterPayload = {
	name: string;
	email: string;
	password: string;
	phone: string;
};

export type IVerifyEmailPayload = {
	email: string;
	otp: string;
};

export type IResendOtpPayload = {
	email: string;
};

export type ILoginUserPayload = {
	email: string;
	password: string;
};

export type IForgotPasswordPayload = {
	email: string;
};

export type IResetPasswordPayload = {
	email: string;
	otp: string;
	newPassword: string;
};

export type IRequestUser = {
	userId: string;
	name: string;
	email: string;
	role: string;
};