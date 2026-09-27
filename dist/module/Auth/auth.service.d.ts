import { ILoginUserPayload, IRegisterPayload, IVerifyEmailPayload } from "./auth.interface";
import { UserRole } from "../../generated/prisma/enums";
export declare const AuthService: {
    registrationUser: (payload: IRegisterPayload) => Promise<void>;
    verifyEmail: (payload: IVerifyEmailPayload) => Promise<{
        user: {
            role: UserRole;
            name: string;
            email: string;
            phone: string;
            id: string;
            profileImage: string | null;
            isActive: boolean;
            emailVerified: boolean;
            otp: string | null;
            otpExpiresAt: Date | null;
            createdAt: Date;
            updatedAt: Date;
        };
        accessToken: string;
        refreshToken: string;
    }>;
    loginUser: (payload: ILoginUserPayload) => Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    getMe: (userId: string) => Promise<{
        driverProfile: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            licenseNumber: string;
            availabilityStatus: import("../../generated/prisma/enums").DriverAvailabilityStatus;
        } | null;
    } & {
        role: UserRole;
        name: string;
        email: string;
        phone: string;
        id: string;
        profileImage: string | null;
        isActive: boolean;
        emailVerified: boolean;
        otp: string | null;
        otpExpiresAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
    resendOtp: (email: string) => Promise<void>;
    forgotPassword: (payload: {
        email: string;
    }) => Promise<void>;
    resetPassword: (payload: {
        email: string;
        otp: string;
        newPassword: string;
    }) => Promise<{
        message: string;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map