import type { Request, Response } from "express";
import httpStatus from "http-status";
import { AppError } from "../../utils/AppError";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import type { IRequestUser } from "./auth.interface";
import { AuthService } from "./auth.service";

const registrationUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await AuthService.registrationUser(payload);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Verification OTP Sent",
    // ⚠️ DEMO: OTP returned in response for evaluator convenience.
    // Remove in real production.
    data: result,
  });
});

const verifyEmail = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;

  const result = await AuthService.verifyEmail(payload);

  const { accessToken, refreshToken, user } = result;

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24,
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Email Verified Successfully",
    data: {
      accessToken,
      refreshToken,
      user,
    },
  });
});

const loginUser = catchAsync(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await AuthService.loginUser(payload);
  const { accessToken, refreshToken } = result;

  res.cookie("accessToken", accessToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24,
  });
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    secure: false,
    sameSite: "none",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User logged in successfully",
    data: {
      accessToken,
      refreshToken,
    },
  });
});

const getMe = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as unknown as IRequestUser;

  if (!user) {
    throw new AppError(
      httpStatus.UNAUTHORIZED,
      "User information is missing in the request",
    );
  }

  const result = await AuthService.getMe(user.userId);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User profile fetched successfully",
    data: result,
  });
});

const resendOtp = catchAsync(async (req: Request, res: Response) => {
  const result = await AuthService.resendOtp(req.body.email);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `OTP Sent To Email : ${req.body.email}`,
    // ⚠️ DEMO: OTP returned for evaluator convenience
    data: result,
  });
});

const forgotPassword = catchAsync(async (req: Request, res: Response) => {
  await AuthService.forgotPassword(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: `OTP Sent To Email : ${req.body.email}`,
    data: null,
  });
});

const resetPassword = catchAsync(async (req: Request, res: Response) => {
  await AuthService.resetPassword(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password Changed Successfully",
    data: null,
  });
});

export const AuthController = {
  registrationUser,
  verifyEmail,
  loginUser,
  getMe,
  resendOtp,
  forgotPassword,
  resetPassword,
};