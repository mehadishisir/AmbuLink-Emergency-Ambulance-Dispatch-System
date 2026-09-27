"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmergencyRequestServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
const enums_1 = require("../../generated/prisma/enums");
const createEmergencyRequest = async (userId, payload) => {
    const user = await prisma_1.prisma.user.findUnique({
        where: { id: userId },
    });
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "User not found");
    }
    const activeRequest = await prisma_1.prisma.emergencyRequest.findFirst({
        where: {
            patientId: userId,
            status: {
                notIn: [
                    enums_1.EmergencyRequestStatus.COMPLETED,
                    enums_1.EmergencyRequestStatus.CANCELLED,
                ],
            },
        },
    });
    if (activeRequest) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "You already have an active emergency request");
    }
    const emergencyRequest = await prisma_1.prisma.emergencyRequest.create({
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
const getAllEmergencyRequests = async (query) => {
    const limit = query.limit ? Number(query.limit) : 10;
    const page = query.page ? Number(query.page) : 1;
    const skip = (page - 1) * limit;
    const sortBy = query.sortBy || "createdAt";
    const sortOrder = query.sortOrder || "desc";
    const andConditions = [];
    if (query.status) {
        andConditions.push({
            status: query.status,
        });
    }
    if (query.priority) {
        andConditions.push({
            priority: query.priority,
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const [requests, total] = await Promise.all([
        prisma_1.prisma.emergencyRequest.findMany({
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
        prisma_1.prisma.emergencyRequest.count({ where: whereConditions }),
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
const assignDriverToRequest = async (requestId, driverId) => {
    const request = await prisma_1.prisma.emergencyRequest.findUnique({
        where: { id: requestId },
    });
    if (!request) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Emergency request not found");
    }
    if (request.status !== enums_1.EmergencyRequestStatus.PENDING) {
        throw new AppError_1.AppError(http_status_1.default.BAD_REQUEST, "Request has already been processed");
    }
    const driver = await prisma_1.prisma.driver.findUnique({
        where: { id: driverId },
    });
    if (!driver) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Driver not found");
    }
    const updatedRequest = await prisma_1.prisma.emergencyRequest.update({
        where: { id: requestId },
        data: {
            driverId,
            status: enums_1.EmergencyRequestStatus.DISPATCHED,
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
const updateRequestStatus = async (requestId, status, userId, userRole) => {
    const request = await prisma_1.prisma.emergencyRequest.findUnique({
        where: { id: requestId },
        include: { driver: true },
    });
    if (!request) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Emergency request not found");
    }
    if (userRole === enums_1.UserRole.DRIVER) {
        if (!request.driver || request.driver.userId !== userId) {
            throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You are not assigned to this emergency request");
        }
    }
    const updateData = { status };
    if (status === enums_1.EmergencyRequestStatus.CANCELLED) {
        updateData.cancelledAt = new Date();
    }
    else if (status === enums_1.EmergencyRequestStatus.COMPLETED) {
        updateData.completedAt = new Date();
    }
    const updatedRequest = await prisma_1.prisma.emergencyRequest.update({
        where: { id: requestId },
        data: updateData,
    });
    return updatedRequest;
};
exports.EmergencyRequestServices = {
    createEmergencyRequest,
    getAllEmergencyRequests,
    assignDriverToRequest,
    updateRequestStatus,
};
//# sourceMappingURL=emergency-request.service.js.map