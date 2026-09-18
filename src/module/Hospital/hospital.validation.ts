import z from "zod";

const CreateHospitalZodSchema = z.object({
	name: z.string("Not A String!!!!!").min(2, "Name must be at least 2 characters"),
	address: z.string("Not A String!!!!!").min(5, "Address is too short"),
	phone: z.string("Not A String!!!!!").min(11, "Not A Valid Phone Number!!!"),
	emergencyContact: z.string().optional(),
	latitude: z.number("Latitude must be a number").optional(),
	longitude: z.number("Longitude must be a number").optional(),
	totalBeds: z.number("Total beds must be a number").min(0),
	availableBeds: z.number("Available beds must be a number").min(0),
	hasEmergencySupport: z.boolean().optional(),
});

const UpdateHospitalZodSchema = CreateHospitalZodSchema.partial();

export const HospitalValidation = {
	CreateHospitalZodSchema,
	UpdateHospitalZodSchema,
};