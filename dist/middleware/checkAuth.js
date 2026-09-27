"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const http_status_1 = __importDefault(require("http-status"));
const config_1 = __importDefault(require("../config"));
const prisma_1 = require("../lib/prisma");
const AppError_1 = require("../utils/AppError");
const catchAsync_1 = require("../utils/catchAsync");
const jwt_1 = require("../utils/jwt");
const checkAuth = (...requiredRoles) => {
    return (0, catchAsync_1.catchAsync)(async (req, _res, next) => {
        const token = req.cookies.accessToken
            ? req.cookies.accessToken
            : req.headers.authorization?.startsWith("Bearer ")
                ? req.headers.authorization?.split(" ")[1]
                : req.headers.authorization;
        if (!token) {
            throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, "You are not logged in. Please log in to access this resource.");
        }
        const verifiedToken = jwt_1.jwtUtils.verifyToken(token, config_1.default.jwt_access_secret);
        if (!verifiedToken.success) {
            throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, verifiedToken.error);
        }
        const { email, name, userId, role } = verifiedToken.data;
        if (requiredRoles.length &&
            !requiredRoles.includes(role)) {
            throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "Forbidden. You don't have permission to access this resource.");
        }
        const user = await prisma_1.prisma.user.findUnique({
            where: {
                id: userId,
                email,
                name,
                role,
            },
        });
        if (!user) {
            throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, "User not found. Please log in again.");
        }
        if (!user.isActive) {
            throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "Your account has been deactivated. Please contact support.");
        }
        req.user = {
            email,
            name,
            userId,
            role,
        };
        next();
    });
};
exports.checkAuth = checkAuth;
//# sourceMappingURL=checkAuth.js.map