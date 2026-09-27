"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverRoutes = void 0;
const express_1 = require("express");
const driver_controller_1 = require("./driver.controller");
const validateRequest_1 = require("../../middleware/validateRequest");
const driver_validation_1 = require("./driver.validation");
const checkAuth_1 = require("../../middleware/checkAuth");
const enums_1 = require("../../generated/prisma/enums");
const router = (0, express_1.Router)();
router.post("/", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), (0, validateRequest_1.validateRequest)(driver_validation_1.DriverValidation.CreateDriverZodSchema), driver_controller_1.DriverController.createDriver);
router.get("/", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), driver_controller_1.DriverController.getAllDrivers);
router.get("/me", (0, checkAuth_1.checkAuth)(enums_1.UserRole.DRIVER), driver_controller_1.DriverController.getMyDriverProfile);
router.patch("/me", (0, checkAuth_1.checkAuth)(enums_1.UserRole.DRIVER), (0, validateRequest_1.validateRequest)(driver_validation_1.DriverValidation.UpdateDriverZodSchema), driver_controller_1.DriverController.updateMyDriverProfile);
router.get("/:id", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN, enums_1.UserRole.DRIVER), driver_controller_1.DriverController.getSingleDriver);
router.patch("/:id", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), (0, validateRequest_1.validateRequest)(driver_validation_1.DriverValidation.UpdateDriverZodSchema), driver_controller_1.DriverController.updateDriver);
router.delete("/:id", (0, checkAuth_1.checkAuth)(enums_1.UserRole.ADMIN), driver_controller_1.DriverController.deleteDriver);
exports.DriverRoutes = router;
//# sourceMappingURL=driver.route.js.map