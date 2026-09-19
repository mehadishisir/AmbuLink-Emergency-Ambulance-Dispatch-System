export interface ICreateAmbulancePayload {
  vehicleNumber: string;
  model: string;
  type: string;
  status: string;
  latitude: number;
  longitude: number;
  driverId?: string | null;
}

export interface IUpdateAmbulancePayload {
  vehicleNumber?: string;
  model?: string;
  type?: string;
  status?: string;
  latitude?: number;
  longitude?: number;
  driverId?: string | null;
}

export interface IAmbulanceFilterQuery {
  page?: string;
  limit?: string;
  search?: string;
  status?: string;
  type?: string;
}