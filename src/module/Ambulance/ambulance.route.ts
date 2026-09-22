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


export const AmbulanceRoutes = router;