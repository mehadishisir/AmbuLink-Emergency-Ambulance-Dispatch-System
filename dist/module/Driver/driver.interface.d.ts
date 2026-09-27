import { DriverAvailabilityStatus } from "../../generated/prisma/enums";
export interface ICreateDriverPayload {
    userId: string;
    licenseNumber: string;
    availabilityStatus?: DriverAvailabilityStatus;
}
export interface IUpdateDriverPayload {
    licenseNumber?: string;
    availabilityStatus?: DriverAvailabilityStatus;
    userId?: string;
}
export interface IQuery {
    page?: string | number;
    limit?: string | number;
    sortBy?: string;
    sortOrder?: "asc" | "desc";
    searchTerm?: string;
    [key: string]: any;
}
//# sourceMappingURL=driver.interface.d.ts.map