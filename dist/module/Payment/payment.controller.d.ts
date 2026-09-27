import type { Request, Response } from "express";
export declare const PaymentController: {
    createCheckoutSession: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    verifyPayment: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getPaymentByRequest: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=payment.controller.d.ts.map