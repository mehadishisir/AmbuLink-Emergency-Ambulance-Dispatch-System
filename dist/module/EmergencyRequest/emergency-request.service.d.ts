import { EmergencyRequestStatus, EmergencyPriority, UserRole } from "../../generated/prisma/enums";
import { ICreateEmergencyRequestPayload } from "./emergency-request.interface";
import { IQuery } from "../Driver/driver.interface";
export declare const EmergencyRequestServices: {
    createEmergencyRequest: (userId: string, payload: ICreateEmergencyRequestPayload) => Promise<{
        hospital: {
            name: string;
            phone: string;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            address: string;
            emergencyContact: string | null;
            totalBeds: number;
            availableBeds: number;
            latitude: number | null;
            longitude: number | null;
        } | null;
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
        patient: {
            name: string;
            email: string;
            phone: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: EmergencyRequestStatus;
        driverId: string | null;
        description: string;
        pickupAddress: string;
        pickupLatitude: number | null;
        pickupLongitude: number | null;
        priority: EmergencyPriority;
        ambulanceId: string | null;
        hospitalId: string | null;
        requestedAt: Date;
        cancelledAt: Date | null;
        completedAt: Date | null;
        patientId: string;
    }>;
    getAllEmergencyRequests: (query: IQuery) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
        data: ({
            hospital: {
                name: string;
                phone: string;
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                address: string;
                emergencyContact: string | null;
                totalBeds: number;
                availableBeds: number;
                latitude: number | null;
                longitude: number | null;
            } | null;
            driver: ({
                user: {
                    name: string;
                    phone: string;
                    id: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                licenseNumber: string;
                availabilityStatus: import("../../generated/prisma/enums").DriverAvailabilityStatus;
            }) | null;
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
            patient: {
                name: string;
                email: string;
                phone: string;
                id: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: EmergencyRequestStatus;
            driverId: string | null;
            description: string;
            pickupAddress: string;
            pickupLatitude: number | null;
            pickupLongitude: number | null;
            priority: EmergencyPriority;
            ambulanceId: string | null;
            hospitalId: string | null;
            requestedAt: Date;
            cancelledAt: Date | null;
            completedAt: Date | null;
            patientId: string;
        })[];
    }>;
    getMyRequests: (patientId: string, query: IQuery) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
        data: ({
            payments: {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                status: import("../../generated/prisma/enums").PaymentStatus;
                amount: import("@prisma/client-runtime-utils").Decimal;
                provider: import("../../generated/prisma/enums").PaymentProvider;
                transactionId: string | null;
                paymentUrl: string | null;
                paidAt: Date | null;
                emergencyRequestId: string;
            }[];
            hospital: {
                name: string;
                phone: string;
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                address: string;
                emergencyContact: string | null;
                totalBeds: number;
                availableBeds: number;
                latitude: number | null;
                longitude: number | null;
            } | null;
            driver: ({
                user: {
                    name: string;
                    phone: string;
                    id: string;
                };
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                userId: string;
                licenseNumber: string;
                availabilityStatus: import("../../generated/prisma/enums").DriverAvailabilityStatus;
            }) | null;
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
            status: EmergencyRequestStatus;
            driverId: string | null;
            description: string;
            pickupAddress: string;
            pickupLatitude: number | null;
            pickupLongitude: number | null;
            priority: EmergencyPriority;
            ambulanceId: string | null;
            hospitalId: string | null;
            requestedAt: Date;
            cancelledAt: Date | null;
            completedAt: Date | null;
            patientId: string;
        })[];
    }>;
    getAssignedRequests: (userId: string, query: IQuery) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
        data: ({
            hospital: {
                name: string;
                phone: string;
                id: string;
                isActive: boolean;
                createdAt: Date;
                updatedAt: Date;
                address: string;
                emergencyContact: string | null;
                totalBeds: number;
                availableBeds: number;
                latitude: number | null;
                longitude: number | null;
            } | null;
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
            patient: {
                name: string;
                email: string;
                phone: string;
                id: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: EmergencyRequestStatus;
            driverId: string | null;
            description: string;
            pickupAddress: string;
            pickupLatitude: number | null;
            pickupLongitude: number | null;
            priority: EmergencyPriority;
            ambulanceId: string | null;
            hospitalId: string | null;
            requestedAt: Date;
            cancelledAt: Date | null;
            completedAt: Date | null;
            patientId: string;
        })[];
    }>;
    getSingleRequest: (id: string) => Promise<{
        payments: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            status: import("../../generated/prisma/enums").PaymentStatus;
            amount: import("@prisma/client-runtime-utils").Decimal;
            provider: import("../../generated/prisma/enums").PaymentProvider;
            transactionId: string | null;
            paymentUrl: string | null;
            paidAt: Date | null;
            emergencyRequestId: string;
        }[];
        hospital: {
            name: string;
            phone: string;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            address: string;
            emergencyContact: string | null;
            totalBeds: number;
            availableBeds: number;
            latitude: number | null;
            longitude: number | null;
        } | null;
        driver: ({
            user: {
                name: string;
                phone: string;
                id: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            licenseNumber: string;
            availabilityStatus: import("../../generated/prisma/enums").DriverAvailabilityStatus;
        }) | null;
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
        patient: {
            name: string;
            email: string;
            phone: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: EmergencyRequestStatus;
        driverId: string | null;
        description: string;
        pickupAddress: string;
        pickupLatitude: number | null;
        pickupLongitude: number | null;
        priority: EmergencyPriority;
        ambulanceId: string | null;
        hospitalId: string | null;
        requestedAt: Date;
        cancelledAt: Date | null;
        completedAt: Date | null;
        patientId: string;
    }>;
    assignDriverToRequest: (requestId: string, driverId: string) => Promise<{
        hospital: {
            name: string;
            phone: string;
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            address: string;
            emergencyContact: string | null;
            totalBeds: number;
            availableBeds: number;
            latitude: number | null;
            longitude: number | null;
        } | null;
        driver: ({
            user: {
                name: string;
                phone: string;
                id: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            licenseNumber: string;
            availabilityStatus: import("../../generated/prisma/enums").DriverAvailabilityStatus;
        }) | null;
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
        patient: {
            name: string;
            phone: string;
            id: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: EmergencyRequestStatus;
        driverId: string | null;
        description: string;
        pickupAddress: string;
        pickupLatitude: number | null;
        pickupLongitude: number | null;
        priority: EmergencyPriority;
        ambulanceId: string | null;
        hospitalId: string | null;
        requestedAt: Date;
        cancelledAt: Date | null;
        completedAt: Date | null;
        patientId: string;
    }>;
    updateRequestStatus: (requestId: string, status: EmergencyRequestStatus, userId: string, userRole: UserRole) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: EmergencyRequestStatus;
        driverId: string | null;
        description: string;
        pickupAddress: string;
        pickupLatitude: number | null;
        pickupLongitude: number | null;
        priority: EmergencyPriority;
        ambulanceId: string | null;
        hospitalId: string | null;
        requestedAt: Date;
        cancelledAt: Date | null;
        completedAt: Date | null;
        patientId: string;
    }>;
};
//# sourceMappingURL=emergency-request.service.d.ts.map