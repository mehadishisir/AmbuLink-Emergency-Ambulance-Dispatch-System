import type { Request, Response } from "express";

import httpStatus from "http-status";

import { catchAsync } from "../../utils/catchAsync";

import { sendResponse } from "../../utils/sendResponse";

import { AmbulanceService } from "./ambulance.service";


const createAmbulance = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AmbulanceService.createAmbulance(
      req.body,
    );

    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Ambulance created successfully",
      data: result,
    });
  },
);


export const AmbulanceController = {
  createAmbulance,
};