import { ICreateHospitalPayload, IHospitalFilterQuery, IUpdateHospitalPayload } from "./hospital.interface";
export declare const HospitalService: {
    createHospital: (payload: ICreateHospitalPayload) => Promise<{
        id: string;
        name: string;
        phone: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        emergencyContact: string | null;
        totalBeds: number;
        availableBeds: number;
        latitude: number | null;
        longitude: number | null;
    }>;
    getAllHospitals: (query: IHospitalFilterQuery) => Promise<{
        meta: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
        data: {
            id: string;
            name: string;
            phone: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            address: string;
            emergencyContact: string | null;
            totalBeds: number;
            availableBeds: number;
            latitude: number | null;
            longitude: number | null;
        }[];
    }>;
    getSingleHospital: (id: string) => Promise<{
        id: string;
        name: string;
        phone: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        emergencyContact: string | null;
        totalBeds: number;
        availableBeds: number;
        latitude: number | null;
        longitude: number | null;
    }>;
    updateHospital: (id: string, payload: IUpdateHospitalPayload) => Promise<{
        id: string;
        name: string;
        phone: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        address: string;
        emergencyContact: string | null;
        totalBeds: number;
        availableBeds: number;
        latitude: number | null;
        longitude: number | null;
    }>;
    deleteHospital: (id: string) => Promise<null>;
};
//# sourceMappingURL=hospital.service.d.ts.map