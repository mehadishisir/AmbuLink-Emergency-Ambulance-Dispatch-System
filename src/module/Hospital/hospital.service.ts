import httpStatus from "http-status";

import { prisma } from "../../lib/prisma";

import { AppError } from "../../utils/AppError";

import {
  ICreateHospitalPayload,
  IHospitalFilterQuery,
  IUpdateHospitalPayload,
} from "./hospital.interface";


// Create Hospital
const createHospital = async (payload: ICreateHospitalPayload) => {
  const hospital = await prisma.hospital.create({
    data: payload,
  });

  return hospital;
};


// Get All Hospitals
const getAllHospitals = async (query: IHospitalFilterQuery) => {
  // Pagination
  const page = Math.max(Number(query.page) || 1, 1);

  const limit = Math.min(
    Math.max(Number(query.limit) || 10, 1),
    100,
  );

  const skip = (page - 1) * limit;


  // Filter Conditions
  const whereConditions: any = {};


  // Search by Hospital Name
  if (query.search) {
    whereConditions.name = {
      contains: query.search,
      mode: "insensitive",
    };
  }


  // Filter by Active Status
  if (query.isActive !== undefined) {
    whereConditions.isActive = query.isActive === "true";
  }


  // Get Hospitals and Total Count
  const [hospitals, total] = await Promise.all([
    prisma.hospital.findMany({
      where: whereConditions,
      skip,
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    }),

    prisma.hospital.count({
      where: whereConditions,
    }),
  ]);


  // Return Data with Pagination Meta
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


// Get Single Hospital
const getSingleHospital = async (id: string) => {
  const hospital = await prisma.hospital.findUnique({
    where: {
      id,
    },
  });

  if (!hospital) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Hospital not found",
    );
  }

  return hospital;
};


// Update Hospital
const updateHospital = async (
  id: string,
  payload: IUpdateHospitalPayload,
) => {
  // Check Hospital Exists
  await getSingleHospital(id);

  const updatedHospital = await prisma.hospital.update({
    where: {
      id,
    },

    data: payload,
  });

  return updatedHospital;
};


// Delete Hospital
const deleteHospital = async (id: string) => {
  // Check Hospital Exists
  await getSingleHospital(id);

  await prisma.hospital.delete({
    where: {
      id,
    },
  });

  return null;
};


// Export Hospital Service
export const HospitalService = {
  createHospital,
  getAllHospitals,
  getSingleHospital,
  updateHospital,
  deleteHospital,
};