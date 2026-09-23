import { DriverAvailabilityStatus } from "../../generated/prisma/enums";

export interface ICreateDriverPayload {
  licenseNumber: string;
  availabilityStatus: DriverAvailabilityStatus;
  userId: string;
}

export interface IUpdateDriverPayload {
  licenseNumber?: string;
  availabilityStatus?: DriverAvailabilityStatus;
  userId?: string;
}