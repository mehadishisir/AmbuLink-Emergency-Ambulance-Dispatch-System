import type { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { HospitalService } from "./hospital.service";

const createHospital = catchAsync(async (req: Request, res: Response) => {
	const result = await HospitalService.createHospital(req.body);

	sendResponse(res, {
		statusCode: httpStatus.CREATED,
		success: true,
		message: "Hospital created successfully",
		data: result,
	});
});

const getAllHospitals = catchAsync(async (req: Request, res: Response) => {
	const result = await HospitalService.getAllHospitals(req.query as any);

	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Hospitals retrieved successfully",
		meta: result.meta,
		data: result.data,
	});
});

const getSingleHospital = catchAsync(async (req: Request, res: Response) => {
	const result = await HospitalService.getSingleHospital(req.params.id as string);

	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Hospital retrieved successfully",
		data: result,
	});
});

const updateHospital = catchAsync(async (req: Request, res: Response) => {
	const result = await HospitalService.updateHospital(req.params.id as string, req.body);

	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Hospital updated successfully",
		data: result,
	});
});

const deleteHospital = catchAsync(async (req: Request, res: Response) => {
	await HospitalService.deleteHospital(req.params.id as string);

	sendResponse(res, {
		statusCode: httpStatus.OK,
		success: true,
		message: "Hospital deleted successfully",
		data: null,
	});
});

export const HospitalController = {
	createHospital,
	getAllHospitals,
	getSingleHospital,
	updateHospital,
	deleteHospital,
};