"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const driver_service_1 = require("./driver.service");
/**
 * Create Driver (Admin Action)
 */
const createDriver = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await driver_service_1.DriverServices.createDriver(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.CREATED,
        message: "Driver created successfully!",
        data: result,
    });
});
/**
 * Get All Drivers (Admin/Public search and filter)
 */
const getAllDrivers = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await driver_service_1.DriverServices.getAllDrivers(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Drivers fetched successfully!",
        meta: result.meta,
        data: result.data,
    });
});
/**
 * Get Single Driver by ID
 */
const getSingleDriver = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await driver_service_1.DriverServices.getSingleDriver(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Driver fetched successfully!",
        data: result,
    });
});
/**
 * Get Logged-in Driver's Own Profile
 */
const getMyDriverProfile = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const result = await driver_service_1.DriverServices.getMyDriverProfile(user.userId);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Driver profile fetched successfully!",
        data: result,
    });
});
/**
 * Update Logged-in Driver's Profile
 */
const updateMyDriverProfile = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const user = req.user;
    const result = await driver_service_1.DriverServices.updateMyDriverProfile(user.userId, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Driver profile updated successfully!",
        data: result,
    });
});
/**
 * Update Driver by Admin
 */
const updateDriver = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    const result = await driver_service_1.DriverServices.updateDriver(id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Driver updated successfully by Admin!",
        data: result,
    });
});
/**
 * Delete Driver by Admin
 */
const deleteDriver = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const { id } = req.params;
    await driver_service_1.DriverServices.deleteDriver(id);
    (0, sendResponse_1.sendResponse)(res, {
        success: true,
        statusCode: http_status_1.default.OK,
        message: "Driver deleted successfully!",
        data: null,
    });
});
exports.DriverController = {
    createDriver,
    getAllDrivers,
    getSingleDriver,
    getMyDriverProfile,
    updateMyDriverProfile,
    updateDriver,
    deleteDriver,
};
//# sourceMappingURL=driver.controller.js.map