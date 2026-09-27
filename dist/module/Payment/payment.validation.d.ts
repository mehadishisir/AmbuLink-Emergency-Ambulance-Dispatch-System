import { z } from "zod";
export declare const PaymentValidation: {
    createCheckoutSessionZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            emergencyRequestId: z.ZodString;
            amount: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>;
    verifyPaymentZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            sessionId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=payment.validation.d.ts.map