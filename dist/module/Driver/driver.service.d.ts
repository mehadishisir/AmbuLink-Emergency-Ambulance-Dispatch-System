import { UserRole, DriverAvailabilityStatus } from "../../generated/prisma/enums";
import { ICreateDriverPayload, IQuery } from "./driver.interface";
export declare const DriverServices: {
    createDriver: (payload: ICreateDriverPayload) => Promise<{
        user: {
            role: UserRole;
            id: string;
            name: string;
            email: string;
            phone: string | null;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        licenseNumber: string;
        availabilityStatus: DriverAvailabilityStatus;
    }>;
    getAllDrivers: (query: IQuery) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
        data: ({
            user: {
                role: UserRole;
                id: string;
                name: string;
                email: string;
                phone: string | null;
                profileImage: string | null;
            };
            ambulance: {
                type: import("../../generated/prisma/enums").AmbulanceType;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                latitude: number;
                longitude: number;
                vehicleNumber: string;
                model: string;
                status: import("../../generated/prisma/enums").AmbulanceStatus;
                driverId: string | null;
            } | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            licenseNumber: string;
            availabilityStatus: DriverAvailabilityStatus;
        })[];
    }>;
    getSingleDriver: (id: string) => Promise<{
        user: {
            role: UserRole;
            id: string;
            name: string;
            email: string;
            phone: string | null;
            profileImage: string | null;
        };
        ambulance: {
            type: import("../../generated/prisma/enums").AmbulanceType;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            latitude: number;
            longitude: number;
            vehicleNumber: string;
            model: string;
            status: import("../../generated/prisma/enums").AmbulanceStatus;
            driverId: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        licenseNumber: string;
        availabilityStatus: DriverAvailabilityStatus;
    }>;
    getMyDriverProfile: (userId: string) => Promise<{
        user: {
            role: UserRole;
            id: string;
            name: string;
            email: string;
            phone: string | null;
            profileImage: string | null;
        };
        ambulance: {
            type: import("../../generated/prisma/enums").AmbulanceType;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            latitude: number;
            longitude: number;
            vehicleNumber: string;
            model: string;
            status: import("../../generated/prisma/enums").AmbulanceStatus;
            driverId: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        licenseNumber: string;
        availabilityStatus: DriverAvailabilityStatus;
    }>;
    updateMyDriverProfile: (userId: string, payload: {
        licenseNumber?: string;
        availabilityStatus?: DriverAvailabilityStatus;
    }) => Promise<{
        user: {
            role: UserRole;
            id: string;
            name: string;
            email: string;
            phone: string | null;
            profileImage: string | null;
        };
        ambulance: {
            type: import("../../generated/prisma/enums").AmbulanceType;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            latitude: number;
            longitude: number;
            vehicleNumber: string;
            model: string;
            status: import("../../generated/prisma/enums").AmbulanceStatus;
            driverId: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        licenseNumber: string;
        availabilityStatus: DriverAvailabilityStatus;
    }>;
    updateDriver: (id: string, payload: {
        licenseNumber?: string;
        availabilityStatus?: DriverAvailabilityStatus;
    }) => Promise<{
        user: {
            role: UserRole;
            id: string;
            name: string;
            email: string;
            phone: string | null;
            profileImage: string | null;
        };
        ambulance: {
            type: import("../../generated/prisma/enums").AmbulanceType;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            latitude: number;
            longitude: number;
            vehicleNumber: string;
            model: string;
            status: import("../../generated/prisma/enums").AmbulanceStatus;
            driverId: string | null;
        } | null;
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        licenseNumber: string;
        availabilityStatus: DriverAvailabilityStatus;
    }>;
    deleteDriver: (id: string) => Promise<null>;
};
//# sourceMappingURL=driver.service.d.ts.map