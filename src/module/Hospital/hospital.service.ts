import httpStatus from "http-status";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import { ICreateHospitalPayload, IHospitalFilterQuery, IUpdateHospitalPayload } from "./hospital.interface";

const createHospital = async (payload: ICreateHospitalPayload) => {
	const hospital = await prisma.hospital.create({
		data: payload,
	});
	return hospital;
};

const getAllHospitals = async (query: IHospitalFilterQuery) => {
	const page = Number(query.page) || 1;
	const limit = Number(query.limit) || 10;
	const skip = (page - 1) * limit;

	const whereConditions: any = {};

	if (query.search) {
		whereConditions.name = {
			contains: query.search,
			mode: "insensitive",
		};
	}

	if (query.isActive !== undefined) {
		whereConditions.isActive = query.isActive === "true";
	}

	const [hospitals, total] = await Promise.all([
		prisma.hospital.findMany({
			where: whereConditions,
			skip,
			take: limit,
			orderBy: { createdAt: "desc" },
		}),
		prisma.hospital.count({ where: whereConditions }),
	]);

	return {
		meta: {
			page,
			limit,
			total,
			totalPages: Math.ceil(total / limit),
		},
		data: hospitals,
	};
};
const getSingleHospital = async (id: string) => {
	const hospital = await prisma.hospital.findUnique({ where: { id } });

	if (!hospital) {
		throw new AppError(httpStatus.NOT_FOUND, "Hospital not found");
	}

	return hospital;
};

const updateHospital = async (id: string, payload:IUpdateHospitalPayload) => {
	await getSingleHospital(id); // throws 404 if not found

	const updatedHospital = await prisma.hospital.update({
		where: { id },
		data: payload,
	});

	return updatedHospital;
};

const deleteHospital = async (id: string) => {
	await getSingleHospital(id);

	await prisma.hospital.delete({ where: { id } });

	return null;
};

export const HospitalService = {
	createHospital,
	getAllHospitals,
	getSingleHospital,
	updateHospital,
	deleteHospital,
};