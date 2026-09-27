import { Router } from "express";
import { PaymentController } from "./payment.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { PaymentValidation } from "./payment.validation";
import { checkAuth } from "../../middleware/checkAuth";
import { UserRole } from "../../generated/prisma/enums";

const router = Router();

router.post(
  "/create-checkout-session",
  checkAuth(UserRole.PATIENT),
  validateRequest(PaymentValidation.createCheckoutSessionZodSchema),
  PaymentController.createCheckoutSession,
);

router.post(
  "/verify-payment",
  checkAuth(UserRole.PATIENT, UserRole.ADMIN),
  validateRequest(PaymentValidation.verifyPaymentZodSchema),
  PaymentController.verifyPayment,
);

router.get(
  "/request/:emergencyRequestId",
  checkAuth(UserRole.PATIENT, UserRole.ADMIN),
  PaymentController.getPaymentByRequest,
);

export const PaymentRoutes = router;