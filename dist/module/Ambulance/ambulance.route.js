"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AmbulanceRoutes = void 0;
const express_1 = require("express");
const ambulance_controller_1 = require("./ambulance.controller");
const ambulance_validation_1 = require("./ambulance.validation");
const checkAuth_1 = require("../../middleware/checkAuth");
const validateRequest_1 = require("../../middleware/validateRequest");
const enums_1 = require("../../generated/prisma/enums");
const router = (0, express_1.Router)();
router.post("/", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), (0, validateRequest_1.validateRequest)(ambulance_validation_1.AmbulanceValidation.CreateAmbulanceZodSchema), ambulance_controller_1.AmbulanceController.createAmbulance);
router.get("/", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), ambulance_controller_1.AmbulanceController.getAllAmbulances);
router.get("/available", (0, checkAuth_1.checkAuth)(), ambulance_controller_1.AmbulanceController.getAvailableAmbulances);
router.get("/:id", (0, checkAuth_1.checkAuth)(), ambulance_controller_1.AmbulanceController.getSingleAmbulance);
router.patch("/:id", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), (0, validateRequest_1.validateRequest)(ambulance_validation_1.AmbulanceValidation.UpdateAmbulanceZodSchema), ambulance_controller_1.AmbulanceController.updateAmbulance);
router.delete("/:id", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), ambulance_controller_1.AmbulanceController.deleteAmbulance);
exports.AmbulanceRoutes = router;
//# sourceMappingURL=ambulance.route.js.map