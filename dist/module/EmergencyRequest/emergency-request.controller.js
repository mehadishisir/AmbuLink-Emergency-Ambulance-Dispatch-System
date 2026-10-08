"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmergencyRequestController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const emergency_request_service_1 = require("./emergency-request.service");
const createEmergencyRequest = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const result = await emergency_request_service_1.EmergencyRequestServices.createEmergencyRequest(user.userId, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Emergency request created successfully!",
        data: result,
    });
});
const getAllEmergencyRequests = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await emergency_request_service_1.EmergencyRequestServices.getAllEmergencyRequests(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Emergency requests fetched successfully!",
        meta: result.meta,
        data: result.data,
    });
});
const assignDriverToRequest = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const { driverId } = req.body;
    const result = await emergency_request_service_1.EmergencyRequestServices.assignDriverToRequest(id, driverId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Driver assigned successfully!",
        data: result,
    });
});
const updateRequestStatus = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const user = req.user;
    const result = await emergency_request_service_1.EmergencyRequestServices.updateRequestStatus(id, status, user.userId, user.role);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Emergency request status updated successfully!",
        data: result,
    });
});
const getMyRequests = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const result = await emergency_request_service_1.EmergencyRequestServices.getMyRequests(user.userId, req.query);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "My emergency requests fetched successfully!",
        meta: result.meta,
        data: result.data,
    });
});
const getAssignedRequests = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const result = await emergency_request_service_1.EmergencyRequestServices.getAssignedRequests(user.userId, req.query);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Assigned requests fetched successfully!",
        meta: result.meta,
        data: result.data,
    });
});
const getSingleRequest = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await emergency_request_service_1.EmergencyRequestServices.getSingleRequest(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Emergency request fetched successfully!",
        data: result,
    });
});
exports.EmergencyRequestController = {
    createEmergencyRequest,
    getAllEmergencyRequests,
    assignDriverToRequest,
    updateRequestStatus,
    getMyRequests,
    getAssignedRequests,
    getSingleRequest,
};
//# sourceMappingURL=emergency-request.controller.js.map