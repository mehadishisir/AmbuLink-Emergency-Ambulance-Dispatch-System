"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedHospital = exports.seedAmbulance = exports.seedDriver = exports.seedPatient = exports.seedAdmin = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const config_1 = __importDefault(require("../config"));
const prisma_1 = require("../lib/prisma");
const enums_1 = require("../generated/prisma/enums");
const seedAdmin = async () => {
    try {
        const isAdminExist = await prisma_1.prisma.user.findUnique({
            where: {
                email: config_1.default.admin_email,
            },
        });
        if (isAdminExist) {
            console.log("Admin Already Exists!");
            return;
        }
        const name = config_1.default.admin_name;
        const email = config_1.default.admin_email;
        const password = config_1.default.admin_password;
        if (!name || !email || !password) {
            throw new Error("Admin Name, Email, Password Missing In Env File!!!");
        }
        const hashedPassword = await bcryptjs_1.default.hash(password, Number(config_1.default.bcrypt_salt_rounds));
        const admin = await prisma_1.prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword,
                phone: "01700000000",
                role: enums_1.UserRole.ADMIN,
            },
        });
        console.log("Admin Created : ", admin);
    }
    catch (error) {
        console.log("Error Seeding Admin : ", error);
    }
};
exports.seedAdmin = seedAdmin;
const seedPatient = async () => {
    try {
        const email = "patient@example.com";
        const isPatientExist = await prisma_1.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (isPatientExist) {
            console.log("Patient Already Exists!");
            return;
        }
        const hashedPassword = await bcryptjs_1.default.hash("Patient@123", 10);
        const patient = await prisma_1.prisma.user.create({
            data: {
                name: "Demo Patient",
                email,
                password: hashedPassword,
                phone: "01700000001",
                role: enums_1.UserRole.PATIENT,
            },
        });
        console.log("Patient Created : ", patient);
    }
    catch (error) {
        console.log("Error Seeding Patient : ", error);
    }
};
exports.seedPatient = seedPatient;
const seedDriver = async () => {
    try {
        const email = "driver@example.com";
        const isDriverExist = await prisma_1.prisma.user.findUnique({
            where: {
                email,
            },
        });
        if (isDriverExist) {
            console.log("Driver Already Exists!");
            return;
        }
        const hashedPassword = await bcryptjs_1.default.hash("Driver@123", 10);
        const driver = await prisma_1.prisma.user.create({
            data: {
                name: "Demo Driver",
                email,
                password: hashedPassword,
                phone: "01700000002",
                role: enums_1.UserRole.DRIVER,
                driverProfile: {
                    create: {
                        licenseNumber: "DL-123456789",
                        availabilityStatus: "AVAILABLE",
                    },
                },
            },
            include: {
                driverProfile: true,
            },
        });
        console.log("Driver Created : ", driver);
    }
    catch (error) {
        console.log("Error Seeding Driver : ", error);
    }
};
exports.seedDriver = seedDriver;
const seedAmbulance = async () => {
    try {
        const driver = await prisma_1.prisma.driver.findFirst({
            where: {
                licenseNumber: "DL-123456789",
            },
        });
        if (!driver) {
            console.log("Driver Not Found!");
            return;
        }
        const isAmbulanceExist = await prisma_1.prisma.ambulance.findUnique({
            where: {
                driverId: driver.id,
            },
        });
        if (isAmbulanceExist) {
            console.log("Ambulance Already Exists!");
            return;
        }
        const ambulance = await prisma_1.prisma.ambulance.create({
            data: {
                driverId: driver.id,
                vehicleNumber: "DHAKA-METRO-1234",
                model: "Toyota Hiace",
                type: "ADVANCED",
                status: "AVAILABLE",
                latitude: 23.8103,
                longitude: 90.4125,
            },
        });
        console.log("Ambulance Created : ", ambulance);
    }
    catch (error) {
        console.log("Error Seeding Ambulance : ", error);
    }
};
exports.seedAmbulance = seedAmbulance;
const seedHospital = async () => {
    try {
        const hospitalName = "Dhaka Medical College Hospital";
        const isHospitalExist = await prisma_1.prisma.hospital.findFirst({
            where: {
                name: hospitalName,
            },
        });
        if (isHospitalExist) {
            console.log("Hospital Already Exists!");
            return;
        }
        const hospital = await prisma_1.prisma.hospital.create({
            data: {
                name: hospitalName,
                address: "Secretariat Road, Dhaka",
                phone: "02-55165088",
                emergencyContact: "01700000003",
                latitude: 23.7256,
                longitude: 90.396,
                isActive: true,
            },
        });
        console.log("Hospital Created : ", hospital);
    }
    catch (error) {
        console.log("Error Seeding Hospital : ", error);
    }
};
exports.seedHospital = seedHospital;
//# sourceMappingURL=seed.js.map