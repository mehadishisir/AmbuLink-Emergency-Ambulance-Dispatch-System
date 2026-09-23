
import httpStatus from "http-status";

import { prisma } from "../../lib/prisma";

import { AppError } from "../../utils/AppError";

import { IAmbulanceFilterQuery, ICreateAmbulancePayload, IUpdateAmbulancePayload } from "./ambulance.interface";
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
// update ambulance
const updateAmbulance = async (
  id: string,
  payload: IUpdateAmbulancePayload,
) => {
  // 1. Check ambulance exists
  const ambulance = await prisma.ambulance.findUnique({
    where: { id },
  });

  if (!ambulance) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Ambulance not found",
    );
  }

  // 2. Check vehicle number is not already used
  if (
    payload.vehicleNumber &&
    payload.vehicleNumber !== ambulance.vehicleNumber
  ) {
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
  }

  // 3. If driverId is provided, validate driver
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

    // Check whether this driver is already assigned
    // to another ambulance
    const assignedAmbulance = await prisma.ambulance.findUnique({
      where: {
        driverId: payload.driverId,
      },
    });

    if (
      assignedAmbulance &&
      assignedAmbulance.id !== id
    ) {
      throw new AppError(
        httpStatus.CONFLICT,
        "This driver is already assigned to another ambulance",
      );
    }
  }

  // 4. Update ambulance
  const updatedAmbulance = await prisma.ambulance.update({
    where: {
      id,
    },
    data: payload,
  });

  return updatedAmbulance;
};
// delete ambulance
const deleteAmbulance = async (id: string) => {
  // 1. Check ambulance exists
  const ambulance = await prisma.ambulance.findUnique({
    where: { id },
  });

  if (!ambulance) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Ambulance not found",
    );
  }

  // 2. Delete ambulance
  await prisma.ambulance.delete({
    where: {
      id,
    },
  });

  return null;
};
export const AmbulanceService = {
  createAmbulance,
  getAllAmbulances,
  getSingleAmbulance,
  getAvailableAmbulances,
  updateAmbulance,
  deleteAmbulance,
};

