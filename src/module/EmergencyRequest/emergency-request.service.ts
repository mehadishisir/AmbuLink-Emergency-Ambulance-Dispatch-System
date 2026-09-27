import httpStatus from "http-status";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import {
  EmergencyRequestStatus,
  EmergencyPriority,
  UserRole,
} from "../../generated/prisma/enums";
import type { Prisma } from "../../generated/prisma/client";
import { ICreateEmergencyRequestPayload } from "./emergency-request.interface";
import { IQuery } from "../Driver/driver.interface";


const createEmergencyRequest = async (
  userId: string,
  payload: ICreateEmergencyRequestPayload,
) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  const activeRequest = await prisma.emergencyRequest.findFirst({
    where: {
      patientId: userId,
      status: {
        notIn: [
          EmergencyRequestStatus.COMPLETED,
          EmergencyRequestStatus.CANCELLED,
        ],
      },
    },
  });

  if (activeRequest) {
    throw new AppError(
      httpStatus.CONFLICT,
      "You already have an active emergency request",
    );
  }

  const emergencyRequest = await prisma.emergencyRequest.create({
    data: {
      patientId: userId,
      description: payload.description,
      pickupAddress: payload.pickupAddress,
      priority: payload.priority,
      requestedAt: new Date(),
      ...(payload.pickupLatitude !== undefined && {
        pickupLatitude: payload.pickupLatitude,
      }),
      ...(payload.pickupLongitude !== undefined && {
        pickupLongitude: payload.pickupLongitude,
      }),
      ...(payload.ambulanceId !== undefined && {
        ambulanceId: payload.ambulanceId,
      }),
      ...(payload.hospitalId !== undefined && {
        hospitalId: payload.hospitalId,
      }),
    },
    include: {
      patient: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
        },
      },
      ambulance: true,
      hospital: true,
    },
  });

  return emergencyRequest;
};

const getAllEmergencyRequests = async (query: IQuery) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;
  const skip = (page - 1) * limit;

  const sortBy = query.sortBy || "createdAt";
  const sortOrder = query.sortOrder || "desc";

  const andConditions: Prisma.EmergencyRequestWhereInput[] = [];

  if (query.status) {
    andConditions.push({
      status: query.status as EmergencyRequestStatus,
    });
  }

  if (query.priority) {
    andConditions.push({
      priority: query.priority as EmergencyPriority,
    });
  }

  const whereConditions: Prisma.EmergencyRequestWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const [requests, total] = await Promise.all([
    prisma.emergencyRequest.findMany({
      where: whereConditions,
      take: limit,
      skip,
      orderBy: { [sortBy]: sortOrder },
      include: {
        patient: {
          select: { id: true, name: true, email: true, phone: true },
        },
        driver: {
          include: {
            user: {
              select: { id: true, name: true, phone: true },
            },
          },
        },
        ambulance: true,
        hospital: true,
      },
    }),
    prisma.emergencyRequest.count({ where: whereConditions }),
  ]);

  return {
    meta: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
    data: requests,
  };
};

const assignDriverToRequest = async (requestId: string, driverId: string) => {
  const request = await prisma.emergencyRequest.findUnique({
    where: { id: requestId },
  });

  if (!request) {
    throw new AppError(httpStatus.NOT_FOUND, "Emergency request not found");
  }

  if (request.status !== EmergencyRequestStatus.PENDING) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Request has already been processed",
    );
  }

  const driver = await prisma.driver.findUnique({
    where: { id: driverId },
  });

  if (!driver) {
    throw new AppError(httpStatus.NOT_FOUND, "Driver not found");
  }

  const updatedRequest = await prisma.emergencyRequest.update({
    where: { id: requestId },
    data: {
      driverId,
      status: EmergencyRequestStatus.DISPATCHED,
    },
    include: {
      patient: { select: { id: true, name: true, phone: true } },
      driver: {
        include: { user: { select: { id: true, name: true, phone: true } } },
      },
      ambulance: true,
      hospital: true,
    },
  });

  return updatedRequest;
};

const updateRequestStatus = async (
  requestId: string,
  status: EmergencyRequestStatus,
  userId: string,
  userRole: UserRole,
) => {
  const request = await prisma.emergencyRequest.findUnique({
    where: { id: requestId },
    include: { driver: true },
  });

  if (!request) {
    throw new AppError(httpStatus.NOT_FOUND, "Emergency request not found");
  }

  if (userRole === UserRole.DRIVER) {
    if (!request.driver || request.driver.userId !== userId) {
      throw new AppError(
        httpStatus.FORBIDDEN,
        "You are not assigned to this emergency request",
      );
    }
  }

  const updateData: Prisma.EmergencyRequestUpdateInput = { status };

  if (status === EmergencyRequestStatus.CANCELLED) {
    updateData.cancelledAt = new Date();
  } else if (status === EmergencyRequestStatus.COMPLETED) {
    updateData.completedAt = new Date();
  }

  const updatedRequest = await prisma.emergencyRequest.update({
    where: { id: requestId },
    data: updateData,
  });

  return updatedRequest;
};


export const EmergencyRequestServices = {
  createEmergencyRequest,
  getAllEmergencyRequests,
  assignDriverToRequest,
  updateRequestStatus,
}