import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Application , Request,Response } from "express";

import config from "./config";

import { globalErrorHandler } from "./middleware/globalErrorHandler";
import { notFound } from "./middleware/notFound";


const app:Application = express();

// Middleware
app.use(
	cors({
		origin: config.frontend_url,
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
// app.use("/api/auth", authRouter);

// 404 Handler
app.use(notFound);

// Global Error Handler
app.use(globalErrorHandler);

export default app;