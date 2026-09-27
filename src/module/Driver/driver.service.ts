import httpStatus from "http-status";
import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import {
  UserRole,
  DriverAvailabilityStatus,
} from "../../generated/prisma/enums";
import type { Prisma } from "../../generated/prisma/client";
import { ICreateDriverPayload, IQuery } from "./driver.interface";




/**
 * Create Driver
 */
const createDriver = async (payload: ICreateDriverPayload) => {
  // Check if User exists
  const user = await prisma.user.findUnique({
    where: {
      id: payload.userId,
    },
  });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "User not found");
  }

  // Check if user is already registered as a driver
  const existingDriver = await prisma.driver.findUnique({
    where: {
      userId: payload.userId,
    },
  });

  if (existingDriver) {
    throw new AppError(
      httpStatus.CONFLICT,
      "User is already registered as a driver",
    );
  }

  // Check if license number already exists
  const existingLicense = await prisma.driver.findUnique({
    where: {
      licenseNumber: payload.licenseNumber,
    },
  });

  if (existingLicense) {
    throw new AppError(
      httpStatus.CONFLICT,
      "A driver with this license number already exists",
    );
  }

  // Create Driver and update User role
  const result = await prisma.$transaction(async (tx) => {
    const driver = await tx.driver.create({
      data: {
        userId: payload.userId,
        licenseNumber: payload.licenseNumber,
        availabilityStatus:
          payload.availabilityStatus ??
          DriverAvailabilityStatus.AVAILABLE,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            role: true,
          },
        },
      },
    });

    // Update user role to DRIVER
    await tx.user.update({
      where: {
        id: payload.userId,
      },
      data: {
        role: UserRole.DRIVER,
      },
    });

    return driver;
  });

  return result;
};

/**
 * Get All Drivers
 */
const getAllDrivers = async (query: IQuery) => {
  const limit = query.limit ? Number(query.limit) : 10;
  const page = query.page ? Number(query.page) : 1;

  const skip = (page - 1) * limit;

  const sortBy = query.sortBy || "createdAt";
  const sortOrder = query.sortOrder || "desc";

  const andConditions: Prisma.DriverWhereInput[] = [];

  // Search
  if (query.searchTerm) {
    andConditions.push({
      OR: [
        {
          licenseNumber: {
            contains: query.searchTerm,
            mode: "insensitive",
          },
        },
        {
          user: {
            name: {
              contains: query.searchTerm,
              mode: "insensitive",
            },
          },
        },
        {
          user: {
            email: {
              contains: query.searchTerm,
              mode: "insensitive",
            },
          },
        },
      ],
    });
  }

  // Filter by availability status
  if (query.availabilityStatus) {
    andConditions.push({
      availabilityStatus:
        query.availabilityStatus as DriverAvailabilityStatus,
    });
  }

  // Build where condition
  const whereConditions: Prisma.DriverWhereInput =
    andConditions.length > 0
      ? {
          AND: andConditions,
        }
      : {};

  // Get drivers and total count together
  const [drivers, total] = await Promise.all([
    prisma.driver.findMany({
      where: whereConditions,
      take: limit,
      skip,
      orderBy: {
        [sortBy]: sortOrder,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            phone: true,
            role: true,
            profileImage: true,
          },
        },
        ambulance: true,
      },
    }),

    prisma.driver.count({
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
    data: drivers,
  };
};

/**
 * Get Single Driver
 */
const getSingleDriver = async (id: string) => {
  const driver = await prisma.driver.findUnique({
    where: {
      id,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
          profileImage: true,
        },
      },
      ambulance: true,
    },
  });

  if (!driver) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Driver not found",
    );
  }

  return driver;
};

/**
 * Get My Driver Profile
 */
const getMyDriverProfile = async (userId: string) => {
  const driver = await prisma.driver.findUnique({
    where: {
      userId,
    },
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
          profileImage: true,
        },
      },
      ambulance: true,
    },
  });

  if (!driver) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Driver profile not found",
    );
  }

  return driver;
};

/**
 * Update My Driver Profile
 */
const updateMyDriverProfile = async (
  userId: string,
  payload: {
    licenseNumber?: string;
    availabilityStatus?: DriverAvailabilityStatus;
  },
) => {
  const driver = await prisma.driver.findUnique({
    where: {
      userId,
    },
  });

  if (!driver) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Driver profile not found",
    );
  }

  // Check duplicate license number
  if (
    payload.licenseNumber &&
    payload.licenseNumber !== driver.licenseNumber
  ) {
    const existingLicense = await prisma.driver.findUnique({
      where: {
        licenseNumber: payload.licenseNumber,
      },
    });

    if (existingLicense) {
      throw new AppError(
        httpStatus.CONFLICT,
        "A driver with this license number already exists",
      );
    }
  }

  const updatedDriver = await prisma.driver.update({
    where: {
      id: driver.id,
    },
    data: payload,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
          profileImage: true,
        },
      },
      ambulance: true,
    },
  });

  return updatedDriver;
};

/**
 * Update Driver
 * Admin can update any driver
 */
const updateDriver = async (
  id: string,
  payload: {
    licenseNumber?: string;
    availabilityStatus?: DriverAvailabilityStatus;
  },
) => {
  const driver = await prisma.driver.findUnique({
    where: {
      id,
    },
  });

  if (!driver) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Driver not found",
    );
  }

  // Check duplicate license number
  if (
    payload.licenseNumber &&
    payload.licenseNumber !== driver.licenseNumber
  ) {
    const existingLicense = await prisma.driver.findUnique({
      where: {
        licenseNumber: payload.licenseNumber,
      },
    });

    if (existingLicense) {
      throw new AppError(
        httpStatus.CONFLICT,
        "A driver with this license number already exists",
      );
    }
  }

  const updatedDriver = await prisma.driver.update({
    where: {
      id,
    },
    data: payload,
    include: {
      user: {
        select: {
          id: true,
          name: true,
          email: true,
          phone: true,
          role: true,
          profileImage: true,
        },
      },
      ambulance: true,
    },
  });

  return updatedDriver;
};

/**
 * Delete Driver
 */
const deleteDriver = async (id: string) => {
  const driver = await prisma.driver.findUnique({
    where: {
      id,
    },
  });

  if (!driver) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Driver not found",
    );
  }

  // Driver cannot be deleted while ambulance is assigned
  if (driver.availabilityStatus === DriverAvailabilityStatus.AVAILABLE) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "Cannot delete driver while an ambulance is assigned",
    );
  }

  await prisma.$transaction(async (tx) => {
    // Delete driver profile
    await tx.driver.delete({
      where: {
        id,
      },
    });

    // Change user role back to PATIENT
    await tx.user.update({
      where: {
        id: driver.userId,
      },
      data: {
        role: UserRole.PATIENT,
      },
    });
  });

  return null;
};

export const DriverServices = {
  createDriver,
  getAllDrivers,
  getSingleDriver,
  getMyDriverProfile,
  updateMyDriverProfile,
  updateDriver,
  deleteDriver,
};