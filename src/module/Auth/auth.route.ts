import { Router } from "express";
import { AuthController } from "./auth.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { AuthValidation } from "./auth.validation";
import { checkAuth } from "../../middleware/checkAuth";

const router = Router();

router.post("/register", validateRequest(AuthValidation.RegisterZodSchema), AuthController.registrationUser);
router.post("/verify-email", validateRequest(AuthValidation.VerifyEmailZodSchema), AuthController.verifyEmail);
router.post("/login", validateRequest(AuthValidation.LoginZodSchema), AuthController.loginUser);

router.get("/me", checkAuth(), AuthController.getMe);

router.post("/resend-otp", validateRequest(AuthValidation.ResendOtpZodSchema), AuthController.resendOtp);
router.post("/forgot-password", validateRequest(AuthValidation.ForgotPasswordZodSchema), AuthController.forgotPassword);
router.post("/reset-password", validateRequest(AuthValidation.ResetPasswordZodSchema), AuthController.resetPassword);

// Google OAuth routes
router.get("/google/url", AuthController.getGoogleUrl);
router.get("/google/callback", AuthController.googleLogin);

export const AuthRoutes = router;