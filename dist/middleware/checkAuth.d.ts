import type { NextFunction, Request, Response } from "express";
import { UserRole } from "../generated/prisma/enums";
export interface RequestUser {
    email: string;
    name: string;
    userId: string;
    role: UserRole;
}
declare global {
    namespace Express {
        interface Request {
            user?: RequestUser;
        }
    }
}
export declare const checkAuth: (...requiredRoles: UserRole[]) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=checkAuth.d.ts.map