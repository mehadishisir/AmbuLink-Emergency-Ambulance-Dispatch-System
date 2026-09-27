"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmergencyRequestRoutes = void 0;
const express_1 = require("express");
const validateRequest_1 = require("../../middleware/validateRequest");
const checkAuth_1 = require("../../middleware/checkAuth");
const enums_1 = require("../../generated/prisma/enums");
const emergency_request_validation_1 = require("./emergency-request.validation");
const emergency_request_controller_1 = require("./emergency-request.controller");
const router = (0, express_1.Router)();
router.post("/", (0, checkAuth_1.checkAuth)(enums_1.UserRole.PATIENT), (0, validateRequest_1.validateRequest)(emergency_request_validation_1.EmergencyRequestValidation.createEmergencyRequestZodSchema), emergency_request_controller_1.EmergencyRequestController.createEmergencyRequest);
router.get("/", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), emergency_request_controller_1.EmergencyRequestController.getAllEmergencyRequests);
router.patch("/:id/assign", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), (0, validateRequest_1.validateRequest)(emergency_request_validation_1.EmergencyRequestValidation.assignDriverZodSchema), emergency_request_controller_1.EmergencyRequestController.assignDriverToRequest);
router.patch("/:id/status", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN, enums_1.UserRole.DRIVER), (0, validateRequest_1.validateRequest)(emergency_request_validation_1.EmergencyRequestValidation.updateStatusZodSchema), emergency_request_controller_1.EmergencyRequestController.updateRequestStatus);
exports.EmergencyRequestRoutes = router;
//# sourceMappingURL=emergency-request.route.js.map