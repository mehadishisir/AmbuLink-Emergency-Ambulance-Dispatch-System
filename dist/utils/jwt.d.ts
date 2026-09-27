import jwt, { type JwtPayload, type SignOptions } from "jsonwebtoken";
export declare const jwtUtils: {
    createToken: (payload: JwtPayload, secret: string, expiresIn: SignOptions) => string;
    verifyToken: (token: string, secret: string) => {
        success: boolean;
        data: string | jwt.JwtPayload;
        error?: never;
    } | {
        success: boolean;
        error: any;
        data?: never;
    };
};
//# sourceMappingURL=jwt.d.ts.map