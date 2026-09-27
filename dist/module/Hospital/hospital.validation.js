"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const CreateHospitalZodSchema = zod_1.default.object({
    name: zod_1.default.string("Not A String!!!!!").min(2, "Name must be at least 2 characters"),
    address: zod_1.default.string("Not A String!!!!!").min(5, "Address is too short"),
    phone: zod_1.default.string("Not A String!!!!!").min(11, "Not A Valid Phone Number!!!"),
    emergencyContact: zod_1.default.string().optional(),
    latitude: zod_1.default.number("Latitude must be a number").optional(),
    longitude: zod_1.default.number("Longitude must be a number").optional(),
    totalBeds: zod_1.default.number("Total beds must be a number").min(0),
    availableBeds: zod_1.default.number("Available beds must be a number").min(0),
    hasEmergencySupport: zod_1.default.boolean().optional(),
});
const UpdateHospitalZodSchema = CreateHospitalZodSchema.partial();
exports.HospitalValidation = {
    CreateHospitalZodSchema,
    UpdateHospitalZodSchema,
};
//# sourceMappingURL=hospital.validation.js.map