import type { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";

import { RequestUser } from "../../middleware/checkAuth";
import { PaymentService } from "./payment.service";

const createCheckoutSession = catchAsync(async (req: Request, res: Response) => {
  const user = req.user as RequestUser;
  const result = await PaymentService.createCheckoutSession(
    user.userId,
    req.body,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Stripe checkout session created successfully!",
    data: result,
  });
});

const verifyPayment = catchAsync(async (req: Request, res: Response) => {
  const { sessionId } = req.body;
  const result = await PaymentService.verifyPayment(sessionId);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Payment verification completed!",
    data: result,
  });
});

const getPaymentByRequest = catchAsync(async (req: Request, res: Response) => {
  const { emergencyRequestId } = req.params;
  const user = req.user as RequestUser;

  const result = await PaymentService.getPaymentByRequest(
    emergencyRequestId as string,
    user.userId,
    user.role,
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Payment details fetched successfully!",
    data: result,
  });
});

export const PaymentController = {
  createCheckoutSession,
  verifyPayment,
  getPaymentByRequest,
};