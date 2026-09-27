import { z } from "zod";

const createCheckoutSessionZodSchema = z.object({
  body: z.object({
    emergencyRequestId: z.string({
      message: "Emergency request ID is required",
    }),
    amount: z.number({
      message: "Amount is required",
    }).positive("Amount must be a positive number"),
  }),
});

const verifyPaymentZodSchema = z.object({
  body: z.object({
    sessionId: z.string({
      message: "Session ID is required",
    }),
  }),
});

export const PaymentValidation = {
  createCheckoutSessionZodSchema,
  verifyPaymentZodSchema,
};