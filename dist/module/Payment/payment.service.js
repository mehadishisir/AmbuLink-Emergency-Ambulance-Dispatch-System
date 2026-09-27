"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const prisma_1 = require("../../lib/prisma");
const AppError_1 = require("../../utils/AppError");
const config_1 = __importDefault(require("../../config"));
const stripe_1 = __importDefault(require("../../lib/stripe"));
const enums_1 = require("../../generated/prisma/enums");
const createCheckoutSession = async (userId, payload) => {
    const emergencyRequest = await prisma_1.prisma.emergencyRequest.findUnique({
        where: { id: payload.emergencyRequestId },
    });
    if (!emergencyRequest) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Emergency request not found");
    }
    if (emergencyRequest.patientId !== userId) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "This is not your emergency request");
    }
    const existingPayment = await prisma_1.prisma.payment.findFirst({
        where: {
            emergencyRequestId: payload.emergencyRequestId,
            status: { in: ["INITIATED", "SUCCESS"] },
        },
    });
    if (existingPayment) {
        throw new AppError_1.AppError(http_status_1.default.CONFLICT, "Payment already exists for this request");
    }
    const session = await stripe_1.default.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [
            {
                price_data: {
                    currency: "usd",
                    product_data: { name: "Ambulance Service Payment" },
                    unit_amount: Math.round(payload.amount * 100),
                },
                quantity: 1,
            },
        ],
        mode: "payment",
        success_url: `${config_1.default.frontend_url}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${config_1.default.frontend_url}/payment-cancel`,
    });
    const payment = await prisma_1.prisma.payment.create({
        data: {
            userId,
            emergencyRequestId: payload.emergencyRequestId,
            amount: payload.amount,
            provider: enums_1.PaymentProvider.STRIPE,
            status: enums_1.PaymentStatus.INITIATED,
            paymentUrl: session.url,
            transactionId: session.id,
        },
    });
    return { checkoutUrl: session.url, payment };
};
const verifyPayment = async (sessionId) => {
    const session = await stripe_1.default.checkout.sessions.retrieve(sessionId);
    const payment = await prisma_1.prisma.payment.findFirst({
        where: { transactionId: sessionId },
    });
    if (!payment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "Payment record not found");
    }
    if (session.payment_status === "paid") {
        const updatedPayment = await prisma_1.prisma.payment.update({
            where: { id: payment.id },
            data: { status: enums_1.PaymentStatus.SUCCESS, paidAt: new Date() },
        });
        return updatedPayment;
    }
    const failedPayment = await prisma_1.prisma.payment.update({
        where: { id: payment.id },
        data: { status: "FAILED" },
    });
    return failedPayment;
};
const getPaymentByRequest = async (emergencyRequestId, userId, role) => {
    const payment = await prisma_1.prisma.payment.findFirst({
        where: { emergencyRequestId },
        orderBy: { createdAt: "desc" },
    });
    if (!payment) {
        throw new AppError_1.AppError(http_status_1.default.NOT_FOUND, "No payment found for this request");
    }
    if (role !== "ADMIN" && payment.userId !== userId) {
        throw new AppError_1.AppError(http_status_1.default.FORBIDDEN, "You cannot view this payment");
    }
    return payment;
};
exports.PaymentService = {
    createCheckoutSession,
    verifyPayment,
    getPaymentByRequest,
};
//# sourceMappingURL=payment.service.js.map