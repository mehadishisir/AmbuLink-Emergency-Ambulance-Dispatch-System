import z from "zod";
export declare const HospitalValidation: {
    CreateHospitalZodSchema: z.ZodObject<{
        name: z.ZodString;
        address: z.ZodString;
        phone: z.ZodString;
        emergencyContact: z.ZodOptional<z.ZodString>;
        latitude: z.ZodOptional<z.ZodNumber>;
        longitude: z.ZodOptional<z.ZodNumber>;
        totalBeds: z.ZodNumber;
        availableBeds: z.ZodNumber;
        hasEmergencySupport: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strip>;
    UpdateHospitalZodSchema: z.ZodObject<{
        name: z.ZodOptional<z.ZodString>;
        address: z.ZodOptional<z.ZodString>;
        phone: z.ZodOptional<z.ZodString>;
        emergencyContact: z.ZodOptional<z.ZodOptional<z.ZodString>>;
        latitude: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        longitude: z.ZodOptional<z.ZodOptional<z.ZodNumber>>;
        totalBeds: z.ZodOptional<z.ZodNumber>;
        availableBeds: z.ZodOptional<z.ZodNumber>;
        hasEmergencySupport: z.ZodOptional<z.ZodOptional<z.ZodBoolean>>;
    }, z.core.$strip>;
};
//# sourceMappingURL=hospital.validation.d.ts.map