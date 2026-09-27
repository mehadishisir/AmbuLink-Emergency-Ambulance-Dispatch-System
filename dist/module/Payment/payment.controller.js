"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const payment_service_1 = require("./payment.service");
const createCheckoutSession = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const result = await payment_service_1.PaymentService.createCheckoutSession(user.userId, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Stripe checkout session created successfully!",
        data: result,
    });
});
const verifyPayment = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { sessionId } = req.body;
    const result = await payment_service_1.PaymentService.verifyPayment(sessionId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Payment verification completed!",
        data: result,
    });
});
const getPaymentByRequest = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { emergencyRequestId } = req.params;
    const user = req.user;
    const result = await payment_service_1.PaymentService.getPaymentByRequest(emergencyRequestId, user.userId, user.role);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Payment details fetched successfully!",
        data: result,
    });
});
exports.PaymentController = {
    createCheckoutSession,
    verifyPayment,
    getPaymentByRequest,
};
//# sourceMappingURL=payment.controller.js.map