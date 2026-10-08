"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = __importDefault(require("./config"));
const prisma_1 = require("./lib/prisma");
const seed_1 = require("./utils/seed");
const PORT = config_1.default.port;
const isVercel = !!process.env.VERCEL;
const runSeeds = async () => {
    try {
        await (0, seed_1.seedAdmin)();
        await (0, seed_1.seedPatient)();
        await (0, seed_1.seedDriver)();
        await (0, seed_1.seedAmbulance)();
        await (0, seed_1.seedHospital)();
    }
    catch (error) {
        console.error("Seed error (ignored):", error);
    }
};
const bootstrap = async () => {
    try {
        await prisma_1.prisma.$connect();
        console.log("Connected to the database successfully.");
        if (!isVercel) {
            await runSeeds();
        }
    }
    catch (error) {
        console.error("Bootstrap error:", error);
    }
};
bootstrap();
if (!isVercel) {
    app_1.default.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}
exports.default = app_1.default;
//# sourceMappingURL=server.js.map