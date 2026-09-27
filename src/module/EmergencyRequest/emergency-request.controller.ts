import type { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

import { RequestUser } from "../../middleware/checkAuth";
import { EmergencyRequestServices } from "./emergency-request.service";
import { IQuery } from "../Driver/driver.interface";


const createEmergencyRequest = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as RequestUser;
  const result = await EmergencyRequestServices.createEmergencyRequest(
    user.userId,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Emergency request created successfully!",
    data: result,
  });
});

const getAllEmergencyRequests = catchAsync(async (req: Request, res: Response) => {
  const result = await EmergencyRequestServices.getAllEmergencyRequests(
    req.query as unknown as IQuery,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Emergency requests fetched successfully!",
    meta: result.meta,
    data: result.data,
  });
});

const assignDriverToRequest = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { driverId } = req.body;
  const result = await EmergencyRequestServices.assignDriverToRequest(
    id as string,
    driverId,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Driver assigned successfully!",
    data: result,
  });
});

const updateRequestStatus = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { status } = req.body;
  const user = req.user as RequestUser;

  const result = await EmergencyRequestServices.updateRequestStatus(
    id as string,
    status,
    user.userId,
    user.role,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Emergency request status updated successfully!",
    data: result,
  });
});

export const EmergencyRequestController = {
  createEmergencyRequest,
  getAllEmergencyRequests,
  assignDriverToRequest,
  updateRequestStatus,
};