"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentValidation = void 0;
const zod_1 = require("zod");
const createCheckoutSessionZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        emergencyRequestId: zod_1.z.string({
            message: "Emergency request ID is required",
        }),
        amount: zod_1.z.number({
            message: "Amount is required",
        }).positive("Amount must be a positive number"),
    }),
});
const verifyPaymentZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        sessionId: zod_1.z.string({
            message: "Session ID is required",
        }),
    }),
});
exports.PaymentValidation = {
    createCheckoutSessionZodSchema,
    verifyPaymentZodSchema,
};
//# sourceMappingURL=payment.validation.js.map