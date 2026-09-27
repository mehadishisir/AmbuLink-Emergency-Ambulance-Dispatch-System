"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbulanceValidation = void 0;
const zod_1 = require("zod");
// Create Ambulance Validation
const CreateAmbulanceZodSchema = zod_1.z.object({
    vehicleNumber: zod_1.z
        .string()
        .min(3, "Vehicle number must be at least 3 characters long"),
    model: zod_1.z
        .string()
        .min(2, "Model must be at least 2 characters long"),
    type: zod_1.z.enum(["BASIC", "ADVANCED", "ICU"]),
    status: zod_1.z
        .enum([
        "AVAILABLE",
        "DISPATCHED",
        "EN_ROUTE",
        "ON_TRIP",
        "MAINTENANCE",
        "OFFLINE",
    ])
        .default("AVAILABLE"),
    latitude: zod_1.z
        .number()
        .min(-90, "Latitude must be between -90 and 90")
        .max(90, "Latitude must be between -90 and 90"),
    longitude: zod_1.z
        .number()
        .min(-180, "Longitude must be between -180 and 180")
        .max(180, "Longitude must be between -180 and 180"),
    driverId: zod_1.z
        .string()
        .uuid("Invalid driver ID")
        .nullable()
        .optional(),
});
// Update Ambulance Validation
const UpdateAmbulanceZodSchema = zod_1.z
    .object({
    vehicleNumber: zod_1.z
        .string()
        .min(3, "Vehicle number must be at least 3 characters long")
        .optional(),
    model: zod_1.z
        .string()
        .min(2, "Model must be at least 2 characters long")
        .optional(),
    type: zod_1.z
        .enum(["BASIC", "ADVANCED", "ICU"])
        .optional(),
    status: zod_1.z
        .enum([
        "AVAILABLE",
        "DISPATCHED",
        "EN_ROUTE",
        "ON_TRIP",
        "MAINTENANCE",
        "OFFLINE",
    ])
        .optional(),
    latitude: zod_1.z
        .number()
        .min(-90, "Latitude must be between -90 and 90")
        .max(90, "Latitude must be between -90 and 90")
        .optional(),
    longitude: zod_1.z
        .number()
        .min(-180, "Longitude must be between -180 and 180")
        .max(180, "Longitude must be between -180 and 180")
        .optional(),
    driverId: zod_1.z
        .string()
        .uuid("Invalid driver ID")
        .nullable()
        .optional(),
})
    .strict();
// Export Validation
exports.AmbulanceValidation = {
    CreateAmbulanceZodSchema,
    UpdateAmbulanceZodSchema,
};
//# sourceMappingURL=ambulance.validation.js.map