import { PaymentProvider, PaymentStatus } from "../../generated/prisma/enums";
import { ICreateCheckoutSessionPayload } from "./payment.interface";
export declare const PaymentService: {
    createCheckoutSession: (userId: string, payload: ICreateCheckoutSessionPayload) => Promise<{
        checkoutUrl: string | null;
        payment: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            status: PaymentStatus;
            amount: import("@prisma/client-runtime-utils").Decimal;
            provider: PaymentProvider;
            transactionId: string | null;
            paymentUrl: string | null;
            paidAt: Date | null;
            emergencyRequestId: string;
        };
    }>;
    verifyPayment: (sessionId: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: PaymentStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        provider: PaymentProvider;
        transactionId: string | null;
        paymentUrl: string | null;
        paidAt: Date | null;
        emergencyRequestId: string;
    }>;
    getPaymentByRequest: (emergencyRequestId: string, userId: string, role: string) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        status: PaymentStatus;
        amount: import("@prisma/client-runtime-utils").Decimal;
        provider: PaymentProvider;
        transactionId: string | null;
        paymentUrl: string | null;
        paidAt: Date | null;
        emergencyRequestId: string;
    }>;
};
//# sourceMappingURL=payment.service.d.ts.map