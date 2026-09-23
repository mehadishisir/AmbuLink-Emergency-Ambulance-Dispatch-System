import type { Request, Response } from "express";

import httpStatus from "http-status";

import { catchAsync } from "../../utils/catchAsync";

import { sendResponse } from "../../utils/sendResponse";

import { AmbulanceService } from "./ambulance.service";
import { IAmbulanceFilterQuery } from "./ambulance.interface";


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
const getAllAmbulances = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AmbulanceService.getAllAmbulances(
      req.query as IAmbulanceFilterQuery,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Ambulances retrieved successfully",
      meta: result.meta,
      data: result.data,
    });
  },
);
const getSingleAmbulance = catchAsync(
  async (req: Request, res: Response) => {
    const result = await AmbulanceService.getSingleAmbulance(
      req.params.id as string,
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Ambulance retrieved successfully",
      data: result,
    });
  },
);
const getAvailableAmbulances = catchAsync(
  async (_req: Request, res: Response) => {
    const result =
      await AmbulanceService.getAvailableAmbulances();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Available ambulances retrieved successfully",
      data: result,
    });
  },
);


export const AmbulanceController = {
  createAmbulance,
  getAllAmbulances,
  getSingleAmbulance,
  getAvailableAmbulances,
};
