import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application , Request,Response } from "express";

import config from "./config";

import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { notFound } from "./middleware/notFound";
import { AuthRoutes } from "./module/Auth/auth.route";
import { HospitalRoutes } from "./module/Hospital/hospital.route";
import { AmbulanceRoutes } from "./module/Ambulance/ambulance.route";
import { DriverRoutes } from "./module/Driver/driver.route";
import { EmergencyRequestRoutes } from "./module/EmergencyRequest/emergency-request.route";
import { PaymentRoutes } from "./module/Payment/payment.route";


const app:Application = express();

// Middleware
const allowedOrigins = [
  config.frontend_url,
  "https://ambu-link-emergency-ambulance-dispa-ashy.vercel.app",
  "http://localhost:3000",
]
  .filter((o): o is string => Boolean(o))
  .map((o) => o.trim().replace(/\/$/, ""));

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(null, false);
      }
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());

// Health Check
app.get("/", (req: Request, res: Response) => {
	res.status(200).json({
		success: true,
		statusCode: 200,
		message: "Emergency Ambulance Dispatch System API is running",
	});
});

// Routes will be added here
app.use("/api/auth", AuthRoutes);
app.use("/api/hospitals", HospitalRoutes);
app.use("/api/ambulances", AmbulanceRoutes);
app.use("/api/drivers", DriverRoutes);
app.use("/api/emergency-requests",EmergencyRequestRoutes);
app.use("/api/payments", PaymentRoutes);
// 404 Handler
app.use(notFound);

// Global Error Handler
app.use(globalErrorHandler);

export default app;