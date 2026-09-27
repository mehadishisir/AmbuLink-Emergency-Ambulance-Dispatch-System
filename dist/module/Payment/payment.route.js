"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const express_1 = require("express");
const payment_controller_1 = require("./payment.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const payment_validation_1 = require("./payment.validation");
const checkAuth_1 = require("../../middleware/checkAuth");
const enums_1 = require("../../generated/prisma/enums");
const router = (0, express_1.Router)();
router.post("/create-checkout-session", (0, checkAuth_1.checkAuth)(enums_1.UserRole.PATIENT), (0, validateRequest_1.validateRequest)(payment_validation_1.PaymentValidation.createCheckoutSessionZodSchema), payment_controller_1.PaymentController.createCheckoutSession);
router.post("/verify-payment", (0, checkAuth_1.checkAuth)(enums_1.UserRole.PATIENT, enums_1.UserRole.ADMIN), (0, validateRequest_1.validateRequest)(payment_validation_1.PaymentValidation.verifyPaymentZodSchema), payment_controller_1.PaymentController.verifyPayment);
router.get("/request/:emergencyRequestId", (0, checkAuth_1.checkAuth)(enums_1.UserRole.PATIENT, enums_1.UserRole.ADMIN), payment_controller_1.PaymentController.getPaymentByRequest);
exports.PaymentRoutes = router;
//# sourceMappingURL=payment.route.js.map