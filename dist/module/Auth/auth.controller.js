"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = require("../../utils/AppError");
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const auth_service_1 = require("./auth.service");
const registrationUser = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    await auth_service_1.AuthService.registrationUser(payload);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Verification OTP Sent",
        data: null,
    });
});
const verifyEmail = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    const result = await auth_service_1.AuthService.verifyEmail(payload);
    const { accessToken, refreshToken, user } = result;
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24, // 24 hour or 1 day
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Email Verified Successfully",
        data: {
            accessToken,
            refreshToken,
            user,
        },
    });
});
const loginUser = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const payload = req.body;
    const result = await auth_service_1.AuthService.loginUser(payload);
    const { accessToken, refreshToken } = result;
    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24, // 24 hour or 1 day
    });
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "none",
        maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
    });
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User logged in successfully",
        data: {
            accessToken,
            refreshToken,
        },
    });
});
const getMe = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    if (!user) {
        throw new AppError_1.AppError(http_status_1.default.UNAUTHORIZED, "User information is missing in the request");
    }
    const result = await auth_service_1.AuthService.getMe(user.userId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "User profile fetched successfully",
        data: result,
    });
});
const resendOtp = (0, catchAsync_1.catchAsync)(async (req, res) => {
    await auth_service_1.AuthService.resendOtp(req.body.email);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: `OTP Sent To Email : ${req.body.email}`,
        data: null,
    });
});
const forgotPassword = (0, catchAsync_1.catchAsync)(async (req, res) => {
    await auth_service_1.AuthService.forgotPassword(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: `OTP Sent To Email : ${req.body.email}`,
        data: null,
    });
});
const resetPassword = (0, catchAsync_1.catchAsync)(async (req, res) => {
    await auth_service_1.AuthService.resetPassword(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Password Changed Successfully",
        data: null,
    });
});
exports.AuthController = {
    registrationUser,
    verifyEmail,
    loginUser,
    getMe,
    resendOtp,
    forgotPassword,
    resetPassword,
};
//# sourceMappingURL=auth.controller.js.map