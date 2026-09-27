import type { NextFunction, Request, Response } from "express";
import type { ZodObject } from "zod";
export declare const validateRequest: (schema: ZodObject) => (req: Request, _res: Response, next: NextFunction) => void;
//# sourceMappingURL=validateRequest.d.ts.map