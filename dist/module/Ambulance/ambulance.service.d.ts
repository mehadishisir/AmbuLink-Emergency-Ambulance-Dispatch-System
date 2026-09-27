import { IAmbulanceFilterQuery, ICreateAmbulancePayload, IUpdateAmbulancePayload } from "./ambulance.interface";
import { AmbulanceStatus } from "../../generated/prisma/enums";
export declare const AmbulanceService: {
    createAmbulance: (payload: ICreateAmbulancePayload) => Promise<{
        type: import("../../generated/prisma/enums").AmbulanceType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: number;
        longitude: number;
        vehicleNumber: string;
        model: string;
        status: AmbulanceStatus;
        driverId: string | null;
    }>;
    getAllAmbulances: (query: IAmbulanceFilterQuery) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
        data: {
            type: import("../../generated/prisma/enums").AmbulanceType;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            latitude: number;
            longitude: number;
            vehicleNumber: string;
            model: string;
            status: AmbulanceStatus;
            driverId: string | null;
        }[];
    }>;
    getSingleAmbulance: (id: string) => Promise<{
        type: import("../../generated/prisma/enums").AmbulanceType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: number;
        longitude: number;
        vehicleNumber: string;
        model: string;
        status: AmbulanceStatus;
        driverId: string | null;
    }>;
    getAvailableAmbulances: () => Promise<{
        type: import("../../generated/prisma/enums").AmbulanceType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: number;
        longitude: number;
        vehicleNumber: string;
        model: string;
        status: AmbulanceStatus;
        driverId: string | null;
    }[]>;
    updateAmbulance: (id: string, payload: IUpdateAmbulancePayload) => Promise<{
        type: import("../../generated/prisma/enums").AmbulanceType;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        latitude: number;
        longitude: number;
        vehicleNumber: string;
        model: string;
        status: AmbulanceStatus;
        driverId: string | null;
    }>;
    deleteAmbulance: (id: string) => Promise<null>;
};
//# sourceMappingURL=ambulance.service.d.ts.map