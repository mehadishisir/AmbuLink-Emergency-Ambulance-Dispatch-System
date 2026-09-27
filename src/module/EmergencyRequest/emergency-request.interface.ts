import { EmergencyPriority, EmergencyRequestStatus } from "../../generated/prisma/enums";

export interface ICreateEmergencyRequestPayload {
  description: string;
  pickupAddress: string;
  pickupLatitude?: number;
  pickupLongitude?: number;
  priority: EmergencyPriority;
  ambulanceId?: string;
  hospitalId?: string;
}

export interface IUpdateEmergencyRequestStatusPayload {
  status: EmergencyRequestStatus;
}