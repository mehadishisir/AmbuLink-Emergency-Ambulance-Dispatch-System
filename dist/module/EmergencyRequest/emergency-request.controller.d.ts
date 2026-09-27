import type { Request, Response } from "express";
export declare const EmergencyRequestController: {
    createEmergencyRequest: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllEmergencyRequests: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    assignDriverToRequest: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateRequestStatus: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=emergency-request.controller.d.ts.map