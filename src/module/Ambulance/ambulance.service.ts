
import httpStatus from "http-status";

import { prisma } from "../../lib/prisma";

import { AppError } from "../../utils/AppError";

import { IAmbulanceFilterQuery, ICreateAmbulancePayload } from "./ambulance.interface";
import { AmbulanceStatus } from "../../generated/prisma/enums";


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

// get ambulance
const getAllAmbulances = async (
  query: IAmbulanceFilterQuery,
) => {
  const page = Math.max(Number(query.page) || 1, 1);

  const limit = Math.min(
    Math.max(Number(query.limit) || 10, 1),
    100,
  );

  const skip = (page - 1) * limit;

  const whereConditions: any = {};

  if (query.search) {
    whereConditions.OR = [
      {
        vehicleNumber: {
          contains: query.search,
          mode: "insensitive",
        },
      },
      {
        model: {
          contains: query.search,
          mode: "insensitive",
        },
      },
    ];
  }

  if (query.status) {
    whereConditions.status = query.status;
  }

  if (query.type) {
    whereConditions.type = query.type;
  }

  const [ambulances, total] = await Promise.all([
    prisma.ambulance.findMany({
      where: whereConditions,
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.ambulance.count({
      where: whereConditions,
    }),
  ]);

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: ambulances,
  };
};
// single ambulance
const getSingleAmbulance = async (id: string) => {
  const ambulance = await prisma.ambulance.findUnique({
    where: {
      id,
    },
  });

  if (!ambulance) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Ambulance not found",
    );
  }

  return ambulance;
};
// available ambulances
const getAvailableAmbulances = async () => {
  const ambulances = await prisma.ambulance.findMany({
    where: {
      status: AmbulanceStatus.AVAILABLE,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return ambulances;
};

export const AmbulanceService = {
  createAmbulance,
  getAllAmbulances,
  getSingleAmbulance,
  getAvailableAmbulances,
};
