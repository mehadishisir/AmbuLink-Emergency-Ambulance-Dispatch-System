import { Router } from "express";
import { DriverController } from "./driver.controller";
import { validateRequest } from "../../middleware/validateRequest";
import { DriverValidation } from "./driver.validation";
import { checkAuth } from "../../middleware/checkAuth";
import { UserRole } from "../../generated/prisma/enums";

const router = Router();

router.post(
  "/",
  checkAuth(UserRole.ADMIN),
  validateRequest(DriverValidation.CreateDriverZodSchema),
  DriverController.createDriver,
);

router.get(
  "/",
  checkAuth(UserRole.ADMIN),
  DriverController.getAllDrivers,
);

router.get(
  "/me",
  checkAuth(UserRole.DRIVER),
  DriverController.getMyDriverProfile,
);

router.patch(
  "/me",
  checkAuth(UserRole.DRIVER),
  validateRequest(DriverValidation.UpdateDriverZodSchema),
  DriverController.updateMyDriverProfile,
);

router.get(
  "/:id",
  checkAuth(UserRole.ADMIN, UserRole.DRIVER),
  DriverController.getSingleDriver,
);

router.patch(
  "/:id",
  checkAuth(UserRole.ADMIN),
  validateRequest(DriverValidation.UpdateDriverZodSchema),
  DriverController.updateDriver,
);

router.delete(
  "/:id",
  checkAuth(UserRole.ADMIN),
  DriverController.deleteDriver,
);

export const DriverRoutes = router;