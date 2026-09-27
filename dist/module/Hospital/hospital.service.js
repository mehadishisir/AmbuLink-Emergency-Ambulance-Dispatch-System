"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
// Create Hospital
const createHospital = async (payload) => {
    const hospital = await prisma_1.prisma.hospital.create({
        data: payload,
    });
    return hospital;
};
// Get All Hospitals
const getAllHospitals = async (query) => {
    // Pagination
    const page = Math.max(Number(query.page) || 1, 1);
    const limit = Math.min(Math.max(Number(query.limit) || 10, 1), 100);
    const skip = (page - 1) * limit;
    // Filter Conditions
    const whereConditions = {};
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
        prisma_1.prisma.hospital.findMany({
            where: whereConditions,
            skip,
            take: limit,
            orderBy: {
                createdAt: "desc",
            },
        }),
        prisma_1.prisma.hospital.count({
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
const getSingleHospital = async (id) => {
    const hospital = await prisma_1.prisma.hospital.findUnique({
        where: {
            id,
        },
    });
    if (!hospital) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Hospital not found");
    }
    return hospital;
};
// Update Hospital
const updateHospital = async (id, payload) => {
    // Check Hospital Exists
    await getSingleHospital(id);
    const updatedHospital = await prisma_1.prisma.hospital.update({
        where: {
            id,
        },
        data: payload,
    });
    return updatedHospital;
};
// Delete Hospital
const deleteHospital = async (id) => {
    // Check Hospital Exists
    await getSingleHospital(id);
    await prisma_1.prisma.hospital.delete({
        where: {
            id,
        },
    });
    return null;
};
// Export Hospital Service
exports.HospitalService = {
    createHospital,
    getAllHospitals,
    getSingleHospital,
    updateHospital,
    deleteHospital,
};
//# sourceMappingURL=hospital.service.js.map