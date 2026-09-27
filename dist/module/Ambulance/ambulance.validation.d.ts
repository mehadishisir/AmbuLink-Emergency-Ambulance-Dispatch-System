import { z } from "zod";
export declare const AmbulanceValidation: {
    CreateAmbulanceZodSchema: z.ZodObject<{
        vehicleNumber: z.ZodString;
        model: z.ZodString;
        type: z.ZodEnum<{
            BASIC: "BASIC";
            ADVANCED: "ADVANCED";
            ICU: "ICU";
        }>;
        status: z.ZodDefault<z.ZodEnum<{
            AVAILABLE: "AVAILABLE";
            DISPATCHED: "DISPATCHED";
            EN_ROUTE: "EN_ROUTE";
            ON_TRIP: "ON_TRIP";
            MAINTENANCE: "MAINTENANCE";
            OFFLINE: "OFFLINE";
        }>>;
        latitude: z.ZodNumber;
        longitude: z.ZodNumber;
        driverId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>;
    UpdateAmbulanceZodSchema: z.ZodObject<{
        vehicleNumber: z.ZodOptional<z.ZodString>;
        model: z.ZodOptional<z.ZodString>;
        type: z.ZodOptional<z.ZodEnum<{
            BASIC: "BASIC";
            ADVANCED: "ADVANCED";
            ICU: "ICU";
        }>>;
        status: z.ZodOptional<z.ZodEnum<{
            AVAILABLE: "AVAILABLE";
            DISPATCHED: "DISPATCHED";
            EN_ROUTE: "EN_ROUTE";
            ON_TRIP: "ON_TRIP";
            MAINTENANCE: "MAINTENANCE";
            OFFLINE: "OFFLINE";
        }>>;
        latitude: z.ZodOptional<z.ZodNumber>;
        longitude: z.ZodOptional<z.ZodNumber>;
        driverId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strict>;
};
//# sourceMappingURL=ambulance.validation.d.ts.map