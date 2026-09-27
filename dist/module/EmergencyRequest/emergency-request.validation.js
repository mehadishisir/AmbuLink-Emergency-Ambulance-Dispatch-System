"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmergencyRequestValidation = void 0;
const zod_1 = require("zod");
const enums_1 = require("../../generated/prisma/enums");
const createEmergencyRequestZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        description: zod_1.z.string({
            message: "Description is required",
        }),
        pickupAddress: zod_1.z.string({
            message: "Pickup address is required",
        }),
        pickupLatitude: zod_1.z.number().optional(),
        pickupLongitude: zod_1.z.number().optional(),
        priority: zod_1.z.nativeEnum(enums_1.EmergencyPriority, {
            message: "Priority is required",
        }),
        ambulanceId: zod_1.z.string().optional(),
        hospitalId: zod_1.z.string().optional(),
    }),
});
const assignDriverZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        driverId: zod_1.z.string({
            message: "Driver ID is required",
        }),
    }),
});
const updateStatusZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        status: zod_1.z.nativeEnum(enums_1.EmergencyRequestStatus, {
            message: "Status is required",
        }),
    }),
});
exports.EmergencyRequestValidation = {
    createEmergencyRequestZodSchema,
    assignDriverZodSchema,
    updateStatusZodSchema,
};
//# sourceMappingURL=emergency-request.validation.js.map