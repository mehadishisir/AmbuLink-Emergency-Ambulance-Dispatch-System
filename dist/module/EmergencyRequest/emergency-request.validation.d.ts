import { z } from "zod";
export declare const EmergencyRequestValidation: {
    createEmergencyRequestZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            description: z.ZodString;
            pickupAddress: z.ZodString;
            pickupLatitude: z.ZodOptional<z.ZodNumber>;
            pickupLongitude: z.ZodOptional<z.ZodNumber>;
            priority: z.ZodEnum<{
                readonly LOW: "LOW";
                readonly MEDIUM: "MEDIUM";
                readonly HIGH: "HIGH";
                readonly CRITICAL: "CRITICAL";
            }>;
            ambulanceId: z.ZodOptional<z.ZodString>;
            hospitalId: z.ZodOptional<z.ZodString>;
        }, z.core.$strip>;
    }, z.core.$strip>;
    assignDriverZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            driverId: z.ZodString;
        }, z.core.$strip>;
    }, z.core.$strip>;
    updateStatusZodSchema: z.ZodObject<{
        body: z.ZodObject<{
            status: z.ZodEnum<{
                readonly PENDING: "PENDING";
                readonly DISPATCHING: "DISPATCHING";
                readonly DISPATCHED: "DISPATCHED";
                readonly EN_ROUTE: "EN_ROUTE";
                readonly PICKED_UP: "PICKED_UP";
                readonly GOING_TO_HOSPITAL: "GOING_TO_HOSPITAL";
                readonly ARRIVED: "ARRIVED";
                readonly COMPLETED: "COMPLETED";
                readonly CANCELLED: "CANCELLED";
            }>;
        }, z.core.$strip>;
    }, z.core.$strip>;
};
//# sourceMappingURL=emergency-request.validation.d.ts.map