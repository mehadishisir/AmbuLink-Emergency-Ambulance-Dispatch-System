import { z } from "zod";
import { EmergencyPriority, EmergencyRequestStatus } from "../../generated/prisma/enums";

const createEmergencyRequestZodSchema = z.object({
  body: z.object({
    description: z.string({
      message: "Description is required",
    }),
    pickupAddress: z.string({
      message: "Pickup address is required",
    }),
    pickupLatitude: z.number().optional(),
    pickupLongitude: z.number().optional(),
    priority: z.nativeEnum(EmergencyPriority, {
      message: "Priority is required",
    }),
    ambulanceId: z.string().optional(),
    hospitalId: z.string().optional(),
  }),
});

const assignDriverZodSchema = z.object({
  body: z.object({
    driverId: z.string({
      message: "Driver ID is required",
    }),
  }),
});

const updateStatusZodSchema = z.object({
  body: z.object({
    status: z.nativeEnum(EmergencyRequestStatus, {
      message: "Status is required",
    }),
  }),
});

export const EmergencyRequestValidation = {
  createEmergencyRequestZodSchema,
  assignDriverZodSchema,
  updateStatusZodSchema,
};