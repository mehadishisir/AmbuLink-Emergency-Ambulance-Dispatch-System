import app from "./app";
import config from "./config";
import { prisma } from "./lib/prisma";
import { redisClient } from "./lib/redis";
import {
	seedAdmin,
	seedPatient,
	seedDriver,
	seedAmbulance,
	seedHospital,
} from "./utils/seed";

const PORT = config.port;

const main = async () => {
	try {
		await prisma.$connect();
		console.log("Connected to the database successfully.");
        await redisClient.connect();
		console.log("Connected to Redis successfully.");
		await seedAdmin();
		await seedPatient();
		await seedDriver();
		await seedAmbulance();
		await seedHospital();

		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.error("Error starting the server:", error);

		await prisma.$disconnect();

		process.exit(1);
	}
};

main();