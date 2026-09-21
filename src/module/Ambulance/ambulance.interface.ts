import {
  AmbulanceType,
  AmbulanceStatus,
} from "../../generated/prisma/enums";


// Create Ambulance Payload
export interface ICreateAmbulancePayload {
  vehicleNumber: string;
  model: string;
  type: AmbulanceType;
  status: AmbulanceStatus;
  latitude: number;
  longitude: number;
  driverId?: string | null;
}


// Update Ambulance Payload
export interface IUpdateAmbulancePayload {
  vehicleNumber?: string;
  model?: string;
  type?: AmbulanceType;
  status?: AmbulanceStatus;
  latitude?: number;
  longitude?: number;
  driverId?: string | null;
}


// Ambulance Filter Query
export interface IAmbulanceFilterQuery {
  page?: string;
  limit?: string;
  search?: string;
  status?: AmbulanceStatus;
  type?: AmbulanceType;
}