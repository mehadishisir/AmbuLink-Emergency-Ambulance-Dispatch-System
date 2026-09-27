"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbulanceController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const ambulance_service_1 = require("./ambulance.service");
const createAmbulance = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await ambulance_service_1.AmbulanceService.createAmbulance(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Ambulance created successfully",
        data: result,
    });
});
const getAllAmbulances = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await ambulance_service_1.AmbulanceService.getAllAmbulances(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Ambulances retrieved successfully",
        meta: result.meta,
        data: result.data,
    });
});
const getSingleAmbulance = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await ambulance_service_1.AmbulanceService.getSingleAmbulance(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Ambulance retrieved successfully",
        data: result,
    });
});
const getAvailableAmbulances = (0, catchAsync_1.catchAsync)(async (_req, res) => {
    const result = await ambulance_service_1.AmbulanceService.getAvailableAmbulances();
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Available ambulances retrieved successfully",
        data: result,
    });
});
const updateAmbulance = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await ambulance_service_1.AmbulanceService.updateAmbulance(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Ambulance updated successfully",
        data: result,
    });
});
const deleteAmbulance = (0, catchAsync_1.catchAsync)(async (req, res) => {
    await ambulance_service_1.AmbulanceService.deleteAmbulance(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Ambulance deleted successfully",
        data: null,
    });
});
exports.AmbulanceController = {
    createAmbulance,
    getAllAmbulances,
    getSingleAmbulance,
    getAvailableAmbulances,
    updateAmbulance,
    deleteAmbulance,
};
//# sourceMappingURL=ambulance.controller.js.map