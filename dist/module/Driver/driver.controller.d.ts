import type { Request, Response } from "express";
export declare const DriverController: {
    createDriver: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getAllDrivers: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getSingleDriver: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    getMyDriverProfile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateMyDriverProfile: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    updateDriver: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
    deleteDriver: (req: Request, res: Response, next: import("express").NextFunction) => Promise<void>;
};
//# sourceMappingURL=driver.controller.d.ts.map