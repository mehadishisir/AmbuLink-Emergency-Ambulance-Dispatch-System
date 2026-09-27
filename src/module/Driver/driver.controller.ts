import type { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { DriverServices } from "./driver.service";
import { RequestUser } from "../../middleware/checkAuth";
import { IQuery } from "./driver.interface";


/**
 * Create Driver (Admin Action)
 */
const createDriver = catchAsync(async (req: Request, res: Response) => {
  const result = await DriverServices.createDriver(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Driver created successfully!",
    data: result,
  });
});

/**
 * Get All Drivers (Admin/Public search and filter)
 */
const getAllDrivers = catchAsync(async (req: Request, res: Response) => {
  const result = await DriverServices.getAllDrivers(req.query as unknown as IQuery);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Drivers fetched successfully!",
    meta: result.meta,
    data: result.data,
  });
});

/**
 * Get Single Driver by ID
 */
const getSingleDriver = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DriverServices.getSingleDriver(id as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Driver fetched successfully!",
    data: result,
  });
});

/**
 * Get Logged-in Driver's Own Profile
 */
const getMyDriverProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as RequestUser;
  const result = await DriverServices.getMyDriverProfile(user.userId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Driver profile fetched successfully!",
    data: result,
  });
});

/**
 * Update Logged-in Driver's Profile
 */
const updateMyDriverProfile = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as RequestUser;
  const result = await DriverServices.updateMyDriverProfile(user.userId, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Driver profile updated successfully!",
    data: result,
  });
});

/**
 * Update Driver by Admin
 */
const updateDriver = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await DriverServices.updateDriver(id as string, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Driver updated successfully by Admin!",
    data: result,
  });
});

/**
 * Delete Driver by Admin
 */
const deleteDriver = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await DriverServices.deleteDriver(id as string);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Driver deleted successfully!",
    data: null,
  });
});

export const DriverController = {
  createDriver,
  getAllDrivers,
  getSingleDriver,
  getMyDriverProfile,
  updateMyDriverProfile,
  updateDriver,
  deleteDriver,
};