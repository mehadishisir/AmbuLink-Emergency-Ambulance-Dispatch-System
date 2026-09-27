"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbulanceService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
const enums_1 = require("../../generated/prisma/enums");
// Create Ambulance
const createAmbulance = async (payload) => {
    const existingAmbulance = await prisma_1.prisma.ambulance.findUnique({
        where: {
            vehicleNumber: payload.vehicleNumber,
        },
    });
    if (existingAmbulance) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "An ambulance with this vehicle number already exists");
    }
    if (payload.driverId) {
        const driver = await prisma_1.prisma.driver.findUnique({
            where: {
                id: payload.driverId,
            },
        });
        if (!driver) {
            throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Driver not found");
        }
        const assignedAmbulance = await prisma_1.prisma.ambulance.findUnique({
            where: {
                driverId: payload.driverId,
            },
        });
        if (assignedAmbulance) {
            throw new AppError_1.AppError(http_status_1.default.CONFLICT, "This driver is already assigned to an ambulance");
        }
    }
    const ambulance = await prisma_1.prisma.ambulance.create({
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
const getAllAmbulances = async (query) => {
    const page = Math.max(Number(query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(query.limit) || 10, 1), 100);
    const skip = (page - 1) * limit;
    const whereConditions = {};
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
        prisma_1.prisma.ambulance.findMany({
            where: whereConditions,
            skip,
            take: limit,
            orderBy: {
                createdAt: "desc",
            },
        }),
        prisma_1.prisma.ambulance.count({
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
const getSingleAmbulance = async (id) => {
    const ambulance = await prisma_1.prisma.ambulance.findUnique({
        where: {
            id,
        },
    });
    if (!ambulance) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Ambulance not found");
    }
    return ambulance;
};
// available ambulances
const getAvailableAmbulances = async () => {
    const ambulances = await prisma_1.prisma.ambulance.findMany({
        where: {
            status: enums_1.AmbulanceStatus.AVAILABLE,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    return ambulances;
};
// update ambulance
const updateAmbulance = async (id, payload) => {
    // 1. Check ambulance exists
    const ambulance = await prisma_1.prisma.ambulance.findUnique({
        where: { id },
    });
    if (!ambulance) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Ambulance not found");
    }
    // 2. Check vehicle number is not already used
    if (payload.vehicleNumber &&
        payload.vehicleNumber !== ambulance.vehicleNumber) {
        const existingAmbulance = await prisma_1.prisma.ambulance.findUnique({
            where: {
                vehicleNumber: payload.vehicleNumber,
            },
        });
        if (existingAmbulance) {
            throw new AppError_1.AppError(http_status_1.default.CONFLICT, "An ambulance with this vehicle number already exists");
        }
    }
    // 3. If driverId is provided, validate driver
    if (payload.driverId) {
        const driver = await prisma_1.prisma.driver.findUnique({
            where: {
                id: payload.driverId,
            },
        });
        if (!driver) {
            throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Driver not found");
        }
        // Check whether this driver is already assigned
        // to another ambulance
        const assignedAmbulance = await prisma_1.prisma.ambulance.findUnique({
            where: {
                driverId: payload.driverId,
            },
        });
        if (assignedAmbulance &&
            assignedAmbulance.id !== id) {
            throw new AppError_1.AppError(http_status_1.default.CONFLICT, "This driver is already assigned to another ambulance");
        }
    }
    // 4. Update ambulance
    const updatedAmbulance = await prisma_1.prisma.ambulance.update({
        where: {
            id,
        },
        data: payload,
    });
    return updatedAmbulance;
};
// delete ambulance
const deleteAmbulance = async (id) => {
    // 1. Check ambulance exists
    const ambulance = await prisma_1.prisma.ambulance.findUnique({
        where: { id },
    });
    if (!ambulance) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Ambulance not found");
    }
    // 2. Delete ambulance
    await prisma_1.prisma.ambulance.delete({
        where: {
            id,
        },
    });
    return null;
};
exports.AmbulanceService = {
    createAmbulance,
    getAllAmbulances,
    getSingleAmbulance,
    getAvailableAmbulances,
    updateAmbulance,
    deleteAmbulance,
};
//# sourceMappingURL=ambulance.service.js.map