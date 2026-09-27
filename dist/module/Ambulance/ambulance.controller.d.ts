import type { Request, Response } from "express";
export declare const AmbulanceController: {
    createAmbulance: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllAmbulances: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getSingleAmbulance: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAvailableAmbulances: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateAmbulance: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteAmbulance: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=ambulance.controller.d.ts.map