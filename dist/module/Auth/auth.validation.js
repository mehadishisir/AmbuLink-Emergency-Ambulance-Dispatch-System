"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const RegisterZodSchema = zod_1.default.object({
    name: zod_1.default
        .string("Not A String!!!!!")
        .min(3, "Name must atleast 3 characters long!!!")
        .max(50),
    email: zod_1.default.email("Not email!!"),
    password: zod_1.default
        .string()
        .min(8, "Password Must Minimum 8 Characters Long.")
        .regex(/[a-z]/, "Password must contain atleast 1 Lowercase Letter")
        .regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter")
        .regex(/[0-9]/, "Password must contain atleast 1 Number")
        .regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 Special Character"),
    phone: zod_1.default.string("Not A String!!!!!").min(11, "Not A Valid Phone Number!!!"),
});
const VerifyEmailZodSchema = zod_1.default.object({
    email: zod_1.default.email("Not email!!"),
    otp: zod_1.default.string().length(6),
});
const ResendOtpZodSchema = zod_1.default.object({
    email: zod_1.default.email("Not email!!"),
});
const LoginZodSchema = zod_1.default.object({
    email: zod_1.default.email("Not email!!"),
    password: zod_1.default
        .string()
        .min(8, "Password Must Minimum 8 Characters Long.")
        .regex(/[a-z]/, "Password must contain atleast 1 Lowercase Letter")
        .regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter")
        .regex(/[0-9]/, "Password must contain atleast 1 Number")
        .regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 Special Character"),
});
const RefreshTokenZodSchema = zod_1.default.object({
    refreshToken: zod_1.default.string("Not A String!!!!!"),
});
const ForgotPasswordZodSchema = zod_1.default.object({
    email: zod_1.default.email("Not email!!"),
});
const ResetPasswordZodSchema = zod_1.default.object({
    email: zod_1.default.email("Not email!!"),
    newPassword: zod_1.default
        .string()
        .min(8, "Password Must Minimum 8 Characters Long.")
        .regex(/[a-z]/, "Password must contain atleast 1 Lowercase Letter")
        .regex(/[A-Z]/, "Password must contain atleast 1 Uppercase Letter")
        .regex(/[0-9]/, "Password must contain atleast 1 Number")
        .regex(/[^A-Za-z0-9]/, "Password must contain atleast 1 Special Character"),
    otp: zod_1.default.string().length(6),
});
exports.AuthValidation = {
    RegisterZodSchema,
    VerifyEmailZodSchema,
    ResendOtpZodSchema,
    LoginZodSchema,
    RefreshTokenZodSchema,
    ForgotPasswordZodSchema,
    ResetPasswordZodSchema,
};
//# sourceMappingURL=auth.validation.js.map