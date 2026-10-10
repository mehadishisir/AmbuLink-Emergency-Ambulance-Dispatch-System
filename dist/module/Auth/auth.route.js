"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_1 = require("express");
const auth_controller_1 = require("./auth.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const auth_validation_1 = require("./auth.validation");
const checkAuth_1 = require("../../middleware/checkAuth");
const router = (0, express_1.Router)();
router.post("/register", (0, validateRequest_1.validateRequest)(auth_validation_1.AuthValidation.RegisterZodSchema), auth_controller_1.AuthController.registrationUser);
router.post("/verify-email", (0, validateRequest_1.validateRequest)(auth_validation_1.AuthValidation.VerifyEmailZodSchema), auth_controller_1.AuthController.verifyEmail);
router.post("/login", (0, validateRequest_1.validateRequest)(auth_validation_1.AuthValidation.LoginZodSchema), auth_controller_1.AuthController.loginUser);
router.get("/me", (0, checkAuth_1.checkAuth)(), auth_controller_1.AuthController.getMe);
router.post("/resend-otp", (0, validateRequest_1.validateRequest)(auth_validation_1.AuthValidation.ResendOtpZodSchema), auth_controller_1.AuthController.resendOtp);
router.post("/forgot-password", (0, validateRequest_1.validateRequest)(auth_validation_1.AuthValidation.ForgotPasswordZodSchema), auth_controller_1.AuthController.forgotPassword);
router.post("/reset-password", (0, validateRequest_1.validateRequest)(auth_validation_1.AuthValidation.ResetPasswordZodSchema), auth_controller_1.AuthController.resetPassword);
exports.AuthRoutes = router;
//# sourceMappingURL=auth.route.js.map