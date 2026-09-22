
import httpStatus from "http-status";

import { prisma } from "../../lib/prisma";

import { AppError } from "../../utils/AppError";

import { ICreateAmbulancePayload } from "./ambulance.interface";


// Create Ambulance
const createAmbulance = async (
  payload: ICreateAmbulancePayload,
) => {
  const existingAmbulance = await prisma.ambulance.findUnique({
    where: {
      vehicleNumber: payload.vehicleNumber,
    },
  });

  if (existingAmbulance) {
    throw new AppError(
      httpStatus.CONFLICT,
      "An ambulance with this vehicle number already exists",
    );
  }


  if (payload.driverId) {
    const driver = await prisma.driver.findUnique({
      where: {
        id: payload.driverId,
      },
    });

    if (!driver) {
      throw new AppError(
        httpStatus.NOT_FOUND,
        "Driver not found",
      );
    }


   
    const assignedAmbulance = await prisma.ambulance.findUnique({
      where: {
        driverId: payload.driverId,
      },
    });

    if (assignedAmbulance) {
      throw new AppError(
        httpStatus.CONFLICT,
        "This driver is already assigned to an ambulance",
      );
    }
  }


  
  const ambulance = await prisma.ambulance.create({
    data: {
      vehicleNumber: payload.vehicleNumber,
      model: payload.model,
      type: payload.type,
      status: payload.status,
      latitude: payload.latitude,
      longitude: payload.longitude,
      driverId: payload.driverId ?? null,
    },
  });

  return ambulance;
};


export const AmbulanceService = {
  createAmbulance,
};
