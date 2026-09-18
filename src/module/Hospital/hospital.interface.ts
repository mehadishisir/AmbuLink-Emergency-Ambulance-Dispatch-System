export type ICreateHospitalPayload = {
	name: string;
	address: string;
	phone: string;
	emergencyContact?: string;
	latitude?: number;
	longitude?: number;
	totalBeds: number;
	availableBeds: number;
	hasEmergencySupport?: boolean;
};

export type IUpdateHospitalPayload = Partial<ICreateHospitalPayload> & {
	isActive?: boolean;
};

export type IHospitalFilterQuery = {
	page?: string;
	limit?: string;
	search?: string;
	isActive?: string;
};