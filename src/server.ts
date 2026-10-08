import app from "./app";
import config from "./config";
import { prisma } from "./lib/prisma";
import {
	seedAdmin,
	seedPatient,
	seedDriver,
	seedAmbulance,
	seedHospital,
} from "./utils/seed";

const PORT = config.port;

const isVercel = !!process.env.VERCEL;

const runSeeds = async () => {
	try {
		await seedAdmin();
		await seedPatient();
		await seedDriver();
		await seedAmbulance();
		await seedHospital();
	} catch (error) {
		console.error("Seed error (ignored):", error);
	}
};

const bootstrap = async () => {
	try {
		await prisma.$connect();
		console.log("Connected to the database successfully.");

	
		if (!isVercel) {
			await runSeeds();
		}
	} catch (error) {
		console.error("Bootstrap error:", error);
	}
};

bootstrap();


if (!isVercel) {
	app.listen(PORT, () => {
		console.log(`Server is running on port ${PORT}`);
	});
}

export default app;