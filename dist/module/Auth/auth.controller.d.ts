import type { Request, Response } from "express";
export declare const AuthController: {
    registrationUser: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    verifyEmail: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    loginUser: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getMe: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    resendOtp: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    forgotPassword: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    resetPassword: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map