import { AmbulanceType, AmbulanceStatus } from "../../generated/prisma/enums";
export interface ICreateAmbulancePayload {
    vehicleNumber: string;
    model: string;
    type: AmbulanceType;
    status: AmbulanceStatus;
    latitude: number;
    longitude: number;
    driverId?: string | null;
}
export interface IUpdateAmbulancePayload {
    vehicleNumber?: string;
    model?: string;
    type?: AmbulanceType;
    status?: AmbulanceStatus;
    latitude?: number;
    longitude?: number;
    driverId?: string | null;
}
export interface IAmbulanceFilterQuery {
    page?: string;
    limit?: string;
    search?: string;
    status?: AmbulanceStatus;
    type?: AmbulanceType;
}
//# sourceMappingURL=ambulance.interface.d.ts.map