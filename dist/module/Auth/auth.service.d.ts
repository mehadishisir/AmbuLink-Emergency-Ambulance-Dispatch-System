import { ILoginUserPayload, IRegisterPayload, IVerifyEmailPayload } from "./auth.interface";
import { UserRole } from "../../generated/prisma/enums";
export declare const AuthService: {
    registrationUser: (payload: IRegisterPayload) => Promise<void>;
    verifyEmail: (payload: IVerifyEmailPayload) => Promise<{
        user: {
            role: UserRole;
            id: string;
            name: string;
            email: string;
            phone: string | null;
            googleId: string | null;
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
        id: string;
        name: string;
        email: string;
        phone: string | null;
        googleId: string | null;
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
    getGoogleAuthUrl: () => string;
    googleLogin: (code: string) => Promise<{
        user: {
            password: string | null;
            role: UserRole;
            id: string;
            name: string;
            email: string;
            phone: string | null;
            googleId: string | null;
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
};
//# sourceMappingURL=auth.service.d.ts.map