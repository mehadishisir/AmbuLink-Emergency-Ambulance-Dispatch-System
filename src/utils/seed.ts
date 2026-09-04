import bcrypt from "bcryptjs";

import config from "../config";
import { prisma } from "../lib/prisma";
import { UserRole } from "../generated/prisma/enums";

export const seedAdmin = async () => {
	try {
		const isAdminExist = await prisma.user.findUnique({
			where: {
				email: config.admin_email,
			},
		});

		if (isAdminExist) {
			console.log("Admin Already Exists!");
			return;
		}

		const name = config.admin_name;
		const email = config.admin_email;
		const password = config.admin_password;

		if (!name || !email || !password) {
			throw new Error(
				"Admin Name, Email, Password Missing In Env File!!!",
			);
		}

		const hashedPassword = await bcrypt.hash(
			password,
			Number(config.bcrypt_salt_rounds),
		);

		const admin = await prisma.user.create({
			data: {
				name,
				email,
				password: hashedPassword,
				phone: "01700000000",
				role: UserRole.ADMIN,
			},
		});

		console.log("Admin Created : ", admin);
	} catch (error) {
		console.log("Error Seeding Admin : ", error);
	}
};

export const seedPatient = async () => {
	try {
		const email = "patient@example.com";

		const isPatientExist = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (isPatientExist) {
			console.log("Patient Already Exists!");
			return;
		}

		const hashedPassword = await bcrypt.hash("Patient@123", 10);

		const patient = await prisma.user.create({
			data: {
				name: "Demo Patient",
				email,
				password: hashedPassword,
				phone: "01700000001",
				role: UserRole.PATIENT,
			},
		});

		console.log("Patient Created : ", patient);
	} catch (error) {
		console.log("Error Seeding Patient : ", error);
	}
};

export const seedDriver = async () => {
	try {
		const email = "driver@example.com";

		const isDriverExist = await prisma.user.findUnique({
			where: {
				email,
			},
		});

		if (isDriverExist) {
			console.log("Driver Already Exists!");
			return;
		}

		const hashedPassword = await bcrypt.hash("Driver@123", 10);

		const driver = await prisma.user.create({
			data: {
				name: "Demo Driver",
				email,
				password: hashedPassword,
				phone: "01700000002",
				role: UserRole.DRIVER,
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
	} catch (error) {
		console.log("Error Seeding Driver : ", error);
	}
};

export const seedAmbulance = async () => {
	try {
		const driver = await prisma.driver.findFirst({
			where: {
				licenseNumber: "DL-123456789",
			},
		});

		if (!driver) {
			console.log("Driver Not Found!");
			return;
		}

		const isAmbulanceExist = await prisma.ambulance.findUnique({
			where: {
				driverId: driver.id,
			},
		});

		if (isAmbulanceExist) {
			console.log("Ambulance Already Exists!");
			return;
		}

		const ambulance = await prisma.ambulance.create({
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
	} catch (error) {
		console.log("Error Seeding Ambulance : ", error);
	}
};

export const seedHospital = async () => {
	try {
		const hospitalName = "Dhaka Medical College Hospital";

		const isHospitalExist = await prisma.hospital.findFirst({
			where: {
				name: hospitalName,
			},
		});

		if (isHospitalExist) {
			console.log("Hospital Already Exists!");
			return;
		}

		const hospital = await prisma.hospital.create({
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
	} catch (error) {
		console.log("Error Seeding Hospital : ", error);
	}
};