import type { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";

import type { UserRole } from "../generated/prisma/enums";
import config from "../config";
import { prisma } from "../lib/prisma";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/AppError";

import { jwtUtils } from "../utils/jwt";

export interface RequestUser {
	email: string;
	name: string;
	userId: string;
	role: UserRole;
}

declare global {
	namespace Express {
		interface Request {
			user?: RequestUser;
		}
	}
}

// checkAuth(UserRole.ADMIN, UserRole.PATIENT)
// checkAuth() => all authenticated users
export const checkAuth = (...requiredRoles: UserRole[]) => {
	return catchAsync(
		async (req: Request, _res: Response, next: NextFunction) => {
			const token = req.cookies.accessToken
				? req.cookies.accessToken
				: req.headers.authorization?.startsWith("Bearer ")
					? req.headers.authorization?.split(" ")[1]
					: req.headers.authorization;

			if (!token) {
				throw new AppError(
					httpStatus.UNAUTHORIZED,
					"You are not logged in. Please log in to access this resource.",
				);
			}

			const verifiedToken = jwtUtils.verifyToken(
				token,
				config.jwt_access_secret,
			);

			if (!verifiedToken.success) {
				throw new AppError(
					httpStatus.UNAUTHORIZED,
					verifiedToken.error,
				);
			}

			const { email, name, userId, role } =
				verifiedToken.data as JwtPayload;

			if (
				requiredRoles.length &&
				!requiredRoles.includes(role as UserRole)
			) {
				throw new AppError(
					httpStatus.FORBIDDEN,
					"Forbidden. You don't have permission to access this resource.",
				);
			}

			const user = await prisma.user.findUnique({
				where: {
					id: userId,
					email,
					name,
					role: role as UserRole,
				},
			});

			if (!user) {
				throw new AppError(
					httpStatus.UNAUTHORIZED,
					"User not found. Please log in again.",
				);
			}

			if (!user.isActive) {
				throw new AppError(
					httpStatus.FORBIDDEN,
					"Your account has been deactivated. Please contact support.",
				);
			}

			req.user = {
				email,
				name,
				userId,
				role: role as UserRole,
			};

			next();
		},
	);
};