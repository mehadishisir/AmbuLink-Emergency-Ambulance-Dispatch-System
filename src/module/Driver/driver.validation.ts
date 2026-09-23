import { z } from "zod";
import { DriverAvailabilityStatus } from "../../generated/prisma/enums";

const CreateDriverZodSchema = z.object({
  licenseNumber: z
    .string()
    .trim()
    .min(1, "License number is required"),

  availabilityStatus: z.enum(DriverAvailabilityStatus),

  userId: z
    .string()
    .uuid("Invalid user ID"),
});

const UpdateDriverZodSchema = z.object({
  licenseNumber: z
    .string()
    .trim()
    .min(1, "License number is required")
    .optional(),

  availabilityStatus: z
    .enum(DriverAvailabilityStatus)
    .optional(),

  userId: z
    .string()
    .uuid("Invalid user ID")
    .optional(),
});

export const DriverValidation = {
  CreateDriverZodSchema,
  UpdateDriverZodSchema,
};