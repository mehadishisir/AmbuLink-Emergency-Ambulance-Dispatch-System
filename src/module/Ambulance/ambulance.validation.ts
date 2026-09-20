
import { z } from "zod";


// Create Ambulance Validation
const CreateAmbulanceZodSchema = z.object({
  vehicleNumber: z
    .string()
    .min(3, "Vehicle number must be at least 3 characters long"),

  model: z
    .string()
    .min(2, "Model must be at least 2 characters long"),

  type: z.enum(["BASIC", "ADVANCED", "ICU"]),

  status: z
    .enum([
      "AVAILABLE",
      "DISPATCHED",
      "EN_ROUTE",
      "ON_TRIP",
      "MAINTENANCE",
      "OFFLINE",
    ])
    .default("AVAILABLE"),

  latitude: z
    .number()
    .min(-90, "Latitude must be between -90 and 90")
    .max(90, "Latitude must be between -90 and 90"),

  longitude: z
    .number()
    .min(-180, "Longitude must be between -180 and 180")
    .max(180, "Longitude must be between -180 and 180"),

  driverId: z
    .string()
    .uuid("Invalid driver ID")
    .nullable()
    .optional(),
});


// Update Ambulance Validation
const UpdateAmbulanceZodSchema = z
  .object({
    vehicleNumber: z
      .string()
      .min(3, "Vehicle number must be at least 3 characters long")
      .optional(),

    model: z
      .string()
      .min(2, "Model must be at least 2 characters long")
      .optional(),

    type: z
      .enum(["BASIC", "ADVANCED", "ICU"])
      .optional(),

    status: z
      .enum([
        "AVAILABLE",
        "DISPATCHED",
        "EN_ROUTE",
        "ON_TRIP",
        "MAINTENANCE",
        "OFFLINE",
      ])
      .optional(),

    latitude: z
      .number()
      .min(-90, "Latitude must be between -90 and 90")
      .max(90, "Latitude must be between -90 and 90")
      .optional(),

    longitude: z
      .number()
      .min(-180, "Longitude must be between -180 and 180")
      .max(180, "Longitude must be between -180 and 180")
      .optional(),

    driverId: z
      .string()
      .uuid("Invalid driver ID")
      .nullable()
      .optional(),
  })
  .strict();


// Export Validation
export const AmbulanceValidation = {
  CreateAmbulanceZodSchema,
  UpdateAmbulanceZodSchema,
};