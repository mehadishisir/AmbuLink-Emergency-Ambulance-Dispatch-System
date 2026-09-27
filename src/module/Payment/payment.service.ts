import httpStatus from "http-status";

import { prisma } from "../../lib/prisma";
import { AppError } from "../../utils/AppError";
import config from "../../config";

import stripe from "../../lib/stripe";
import { PaymentProvider, PaymentStatus } from "../../generated/prisma/enums";
import { ICreateCheckoutSessionPayload } from "./payment.interface";

const createCheckoutSession = async (
	userId: string,
	payload: ICreateCheckoutSessionPayload,
) => {
	const emergencyRequest = await prisma.emergencyRequest.findUnique({
		where: { id: payload.emergencyRequestId },
	});

	if (!emergencyRequest) {
		throw new AppError(httpStatus.NOT_FOUND, "Emergency request not found");
	}

	if (emergencyRequest.patientId !== userId) {
		throw new AppError(httpStatus.FORBIDDEN, "This is not your emergency request");
	}

	const existingPayment = await prisma.payment.findFirst({
		where: {
			emergencyRequestId: payload.emergencyRequestId,
			status: { in: ["INITIATED", "SUCCESS"] },
		},
	});

	if (existingPayment) {
		throw new AppError(httpStatus.CONFLICT, "Payment already exists for this request");
	}

	const session = await stripe.checkout.sessions.create({
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
		success_url: `${config.frontend_url}/payment-success?session_id={CHECKOUT_SESSION_ID}`,
		cancel_url: `${config.frontend_url}/payment-cancel`,
	});

	const payment = await prisma.payment.create({
		data: {
			userId,
			emergencyRequestId: payload.emergencyRequestId,
			amount: payload.amount,
			provider: PaymentProvider.STRIPE,
			status: PaymentStatus.INITIATED,
			paymentUrl: session.url,
			transactionId: session.id,
		},
	});

	return { checkoutUrl: session.url, payment };
};

const verifyPayment = async (sessionId: string) => {
	const session = await stripe.checkout.sessions.retrieve(sessionId);

	const payment = await prisma.payment.findFirst({
		where: { transactionId: sessionId },
	});

	if (!payment) {
		throw new AppError(httpStatus.NOT_FOUND, "Payment record not found");
	}

	if (session.payment_status === "paid") {
		const updatedPayment = await prisma.payment.update({
			where: { id: payment.id },
			data: { status: PaymentStatus.SUCCESS, paidAt: new Date() },
		});
		return updatedPayment;
	}

	const failedPayment = await prisma.payment.update({
		where: { id: payment.id },
		data: { status: "FAILED" },
	});
	return failedPayment;
};

const getPaymentByRequest = async (emergencyRequestId: string, userId: string, role: string) => {
	const payment = await prisma.payment.findFirst({
		where: { emergencyRequestId },
		orderBy: { createdAt: "desc" },
	});

	if (!payment) {
		throw new AppError(httpStatus.NOT_FOUND, "No payment found for this request");
	}

	if (role !== "ADMIN" && payment.userId !== userId) {
		throw new AppError(httpStatus.FORBIDDEN, "You cannot view this payment");
	}

	return payment;
};

export const PaymentService = {
	createCheckoutSession,
	verifyPayment,
	getPaymentByRequest,
};