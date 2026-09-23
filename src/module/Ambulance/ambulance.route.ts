import { Router } from "express";

import { AmbulanceController } from "./ambulance.controller";

import { AmbulanceValidation } from "./ambulance.validation";

import { checkAuth } from "../../middleware/checkAuth";

import { validateRequest } from "../../middleware/validateRequest";

import { UserRole } from "../../generated/prisma/enums";


const router = Router();



router.post(
  "/",
  checkAuth(UserRole.ADMIN),
  validateRequest(
    AmbulanceValidation.CreateAmbulanceZodSchema,
  ),
  AmbulanceController.createAmbulance,
);

router.get(
  "/",
  checkAuth(UserRole.ADMIN),
  AmbulanceController.getAllAmbulances,
);
router.get(
  "/available",
  checkAuth(),
  AmbulanceController.getAvailableAmbulances,
);
router.get(
  "/:id",
  checkAuth(),
  AmbulanceController.getSingleAmbulance,
);


export const AmbulanceRoutes = router;