"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HospitalRoutes = void 0;
const express_1 = require("express");
const hospital_controller_1 = require("./hospital.controller");
const hospital_validation_1 = require("./hospital.validation");
const checkAuth_1 = require("../../middleware/checkAuth");
const validateRequest_1 = require("../../middleware/validateRequest");
const enums_1 = require("../../generated/prisma/enums");
const router = (0, express_1.Router)();
router.post("/", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), (0, validateRequest_1.validateRequest)(hospital_validation_1.HospitalValidation.CreateHospitalZodSchema), hospital_controller_1.HospitalController.createHospital);
router.get("/", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), hospital_controller_1.HospitalController.getAllHospitals);
router.get("/:id", (0, checkAuth_1.checkAuth)(), hospital_controller_1.HospitalController.getSingleHospital);
router.patch("/:id", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), (0, validateRequest_1.validateRequest)(hospital_validation_1.HospitalValidation.UpdateHospitalZodSchema), hospital_controller_1.HospitalController.updateHospital);
router.delete("/:id", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), hospital_controller_1.HospitalController.deleteHospital);
exports.HospitalRoutes = router;
//# sourceMappingURL=hospital.route.js.map