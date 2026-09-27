"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverValidation = void 0;
const zod_1 = require("zod");
const enums_1 = require("../../generated/prisma/enums");
const CreateDriverZodSchema = zod_1.z.object({
    licenseNumber: zod_1.z
        .string()
        .trim()
        .min(1, "License number is required"),
    availabilityStatus: zod_1.z.enum(enums_1.DriverAvailabilityStatus),
    userId: zod_1.z
        .string()
        .uuid("Invalid user ID"),
});
const UpdateDriverZodSchema = zod_1.z.object({
    licenseNumber: zod_1.z
        .string()
        .trim()
        .min(1, "License number is required")
        .optional(),
    availabilityStatus: zod_1.z
        .enum(enums_1.DriverAvailabilityStatus)
        .optional(),
    userId: zod_1.z
        .string()
        .uuid("Invalid user ID")
        .optional(),
});
exports.DriverValidation = {
    CreateDriverZodSchema,
    UpdateDriverZodSchema,
};
//# sourceMappingURL=driver.validation.js.map