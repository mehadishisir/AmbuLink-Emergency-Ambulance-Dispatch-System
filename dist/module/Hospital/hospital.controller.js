"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalController = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = require("../../utils/catchAsync");
const sendResponse_1 = require("../../utils/sendResponse");
const hospital_service_1 = require("./hospital.service");
const createHospital = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await hospital_service_1.HospitalService.createHospital(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.CREATED,
        success: true,
        message: "Hospital created successfully",
        data: result,
    });
});
const getAllHospitals = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await hospital_service_1.HospitalService.getAllHospitals(req.query);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Hospitals retrieved successfully",
        meta: result.meta,
        data: result.data,
    });
});
const getSingleHospital = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await hospital_service_1.HospitalService.getSingleHospital(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Hospital retrieved successfully",
        data: result,
    });
});
const updateHospital = (0, catchAsync_1.catchAsync)(async (req, res) => {
    const result = await hospital_service_1.HospitalService.updateHospital(req.params.id, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Hospital updated successfully",
        data: result,
    });
});
const deleteHospital = (0, catchAsync_1.catchAsync)(async (req, res) => {
    await hospital_service_1.HospitalService.deleteHospital(req.params.id);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: "Hospital deleted successfully",
        data: null,
    });
});
exports.HospitalController = {
    createHospital,
    getAllHospitals,
    getSingleHospital,
    updateHospital,
    deleteHospital,
};
//# sourceMappingURL=hospital.controller.js.map