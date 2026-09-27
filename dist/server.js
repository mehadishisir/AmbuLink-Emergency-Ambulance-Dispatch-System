"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const prisma_1 = require("./lib/prisma");
const redis_1 = require("./lib/redis");
const seed_1 = require("./utils/seed");
const PORT = config_1.default.port;
const main = async () => {
    try {
        await prisma_1.prisma.$connect();
        console.log("Connected to the database successfully.");
        await redis_1.redisClient.connect();
        console.log("Connected to Redis successfully.");
        await (0, seed_1.seedAdmin)();
        await (0, seed_1.seedPatient)();
        await (0, seed_1.seedDriver)();
        await (0, seed_1.seedAmbulance)();
        await (0, seed_1.seedHospital)();
        app_1.default.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("Error starting the server:", error);
        await prisma_1.prisma.$disconnect();
        process.exit(1);
    }
};
main();
//# sourceMappingURL=server.js.map