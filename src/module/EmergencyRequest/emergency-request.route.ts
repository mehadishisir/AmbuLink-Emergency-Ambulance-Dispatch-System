import { Router } from "express";

import { validateRequest } from "../../middleware/validateRequest";

import { checkAuth } from "../../middleware/checkAuth";
import { UserRole } from "../../generated/prisma/enums";
import { EmergencyRequestValidation } from "./emergency-request.validation";
import { EmergencyRequestController } from "./emergency-request.controller";

const router = Router();

router.post(
  "/",
  checkAuth(UserRole.PATIENT),
  validateRequest(EmergencyRequestValidation.createEmergencyRequestZodSchema),
  EmergencyRequestController.createEmergencyRequest,
);

router.get(
  "/",
  checkAuth(UserRole.ADMIN),
  EmergencyRequestController.getAllEmergencyRequests,
);
router.get(
  "/my-requests",
  checkAuth(UserRole.PATIENT),
  EmergencyRequestController.getMyRequests,
);

router.get(
  "/assigned",
  checkAuth(UserRole.DRIVER),
  EmergencyRequestController.getAssignedRequests,
);

router.patch(
  "/:id/assign",
  checkAuth(UserRole.ADMIN),
  validateRequest(EmergencyRequestValidation.assignDriverZodSchema),
  EmergencyRequestController.assignDriverToRequest,
);

router.patch(
  "/:id/status",
  checkAuth(UserRole.ADMIN, UserRole.DRIVER),
  validateRequest(EmergencyRequestValidation.updateStatusZodSchema),
  EmergencyRequestController.updateRequestStatus,
);
router.get(
  "/:id",
  checkAuth(UserRole.PATIENT, UserRole.DRIVER, UserRole.ADMIN),
  EmergencyRequestController.getSingleRequest,
);
export const EmergencyRequestRoutes = router;