"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./config"));
const globalErrorHandler_1 = require("./middleware/globalErrorHandler");
const notFound_1 = require("./middleware/notFound");
const auth_route_1 = require("./module/Auth/auth.route");
const hospital_route_1 = require("./module/Hospital/hospital.route");
const ambulance_route_1 = require("./module/Ambulance/ambulance.route");
const driver_route_1 = require("./module/Driver/driver.route");
const emergency_request_route_1 = require("./module/EmergencyRequest/emergency-request.route");
const payment_route_1 = require("./module/Payment/payment.route");
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)({
    origin: config_1.default.frontend_url,
    credentials: true,
}));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
// Health Check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        statusCode: 200,
        message: "Emergency Ambulance Dispatch System API is running",
    });
});
// Routes will be added here
app.use("/api/auth", auth_route_1.AuthRoutes);
app.use("/api/hospitals", hospital_route_1.HospitalRoutes);
app.use("/api/ambulances", ambulance_route_1.AmbulanceRoutes);
app.use("/api/drivers", driver_route_1.DriverRoutes);
app.use("/api/emergency-requests", emergency_request_route_1.EmergencyRequestRoutes);
app.use("/api/payments", payment_route_1.PaymentRoutes);
// 404 Handler
app.use(notFound_1.notFound);
// Global Error Handler
app.use(globalErrorHandler_1.globalErrorHandler);
exports.default = app;
//# sourceMappingURL=app.js.map