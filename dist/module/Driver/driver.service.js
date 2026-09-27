"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
const enums_1 = require("../../generated/prisma/enums");
/**
 * Create Driver
 */
const createDriver = async (payload) => {
    // Check if User exists
    const user = await prisma_1.prisma.user.findUnique({
        where: {
            id: payload.userId,
        },
    });
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "User not found");
    }
    // Check if user is already registered as a driver
    const existingDriver = await prisma_1.prisma.driver.findUnique({
        where: {
            userId: payload.userId,
        },
    });
    if (existingDriver) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "User is already registered as a driver");
    }
    // Check if license number already exists
    const existingLicense = await prisma_1.prisma.driver.findUnique({
        where: {
            licenseNumber: payload.licenseNumber,
        },
    });
    if (existingLicense) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "A driver with this license number already exists");
    }
    // Create Driver and update User role
    const result = await prisma_1.prisma.$transaction(async (tx) => {
        const driver = await tx.driver.create({
            data: {
                userId: payload.userId,
                licenseNumber: payload.licenseNumber,
                availabilityStatus: payload.availabilityStatus ??
                    enums_1.DriverAvailabilityStatus.AVAILABLE,
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
                role: enums_1.UserRole.DRIVER,
            },
        });
        return driver;
    });
    return result;
};
/**
 * Get All Drivers
 */
const getAllDrivers = async (query) => {
    const limit = query.limit ? Number(query.limit) : 10;
    const page = query.page ? Number(query.page) : 1;
    const skip = (page - 1) * limit;
    const sortBy = query.sortBy || "createdAt";
    const sortOrder = query.sortOrder || "desc";
    const andConditions = [];
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
            availabilityStatus: query.availabilityStatus,
        });
    }
    // Build where condition
    const whereConditions = andConditions.length > 0
        ? {
            AND: andConditions,
        }
        : {};
    // Get drivers and total count together
    const [drivers, total] = await Promise.all([
        prisma_1.prisma.driver.findMany({
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
        prisma_1.prisma.driver.count({
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
const getSingleDriver = async (id) => {
    const driver = await prisma_1.prisma.driver.findUnique({
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
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Driver not found");
    }
    return driver;
};
/**
 * Get My Driver Profile
 */
const getMyDriverProfile = async (userId) => {
    const driver = await prisma_1.prisma.driver.findUnique({
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
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Driver profile not found");
    }
    return driver;
};
/**
 * Update My Driver Profile
 */
const updateMyDriverProfile = async (userId, payload) => {
    const driver = await prisma_1.prisma.driver.findUnique({
        where: {
            userId,
        },
    });
    if (!driver) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Driver profile not found");
    }
    // Check duplicate license number
    if (payload.licenseNumber &&
        payload.licenseNumber !== driver.licenseNumber) {
        const existingLicense = await prisma_1.prisma.driver.findUnique({
            where: {
                licenseNumber: payload.licenseNumber,
            },
        });
        if (existingLicense) {
            throw new AppError_1.AppError(http_status_1.default.CONFLICT, "A driver with this license number already exists");
        }
    }
    const updatedDriver = await prisma_1.prisma.driver.update({
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
const updateDriver = async (id, payload) => {
    const driver = await prisma_1.prisma.driver.findUnique({
        where: {
            id,
        },
    });
    if (!driver) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Driver not found");
    }
    // Check duplicate license number
    if (payload.licenseNumber &&
        payload.licenseNumber !== driver.licenseNumber) {
        const existingLicense = await prisma_1.prisma.driver.findUnique({
            where: {
                licenseNumber: payload.licenseNumber,
            },
        });
        if (existingLicense) {
            throw new AppError_1.AppError(http_status_1.default.CONFLICT, "A driver with this license number already exists");
        }
    }
    const updatedDriver = await prisma_1.prisma.driver.update({
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
const deleteDriver = async (id) => {
    const driver = await prisma_1.prisma.driver.findUnique({
        where: {
            id,
        },
    });
    if (!driver) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Driver not found");
    }
    // Driver cannot be deleted while ambulance is assigned
    if (driver.availabilityStatus === enums_1.DriverAvailabilityStatus.AVAILABLE) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Cannot delete driver while an ambulance is assigned");
    }
    await prisma_1.prisma.$transaction(async (tx) => {
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
                role: enums_1.UserRole.PATIENT,
            },
        });
    });
    return null;
};
exports.DriverServices = {
    createDriver,
    getAllDrivers,
    getSingleDriver,
    getMyDriverProfile,
    updateMyDriverProfile,
    updateDriver,
    deleteDriver,
};
//# sourceMappingURL=driver.service.js.map