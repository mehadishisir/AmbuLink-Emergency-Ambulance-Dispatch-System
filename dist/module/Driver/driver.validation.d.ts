import { z } from "zod";
export declare const DriverValidation: {
    CreateDriverZodSchema: z.ZodObject<{
        licenseNumber: z.ZodString;
        availabilityStatus: z.ZodEnum<{
            readonly AVAILABLE: "AVAILABLE";
            readonly BUSY: "BUSY";
            readonly OFFLINE: "OFFLINE";
        }>;
        userId: z.ZodString;
    }, z.core.$strip>;
    UpdateDriverZodSchema: z.ZodObject<{
        licenseNumber: z.ZodOptional<z.ZodString>;
        availabilityStatus: z.ZodOptional<z.ZodEnum<{
            readonly AVAILABLE: "AVAILABLE";
            readonly BUSY: "BUSY";
            readonly OFFLINE: "OFFLINE";
        }>>;
        userId: z.ZodOptional<z.ZodString>;
    }, z.core.$strip>;
};
//# sourceMappingURL=driver.validation.d.ts.map