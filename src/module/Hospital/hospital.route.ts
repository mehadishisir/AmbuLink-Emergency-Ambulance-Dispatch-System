import { Router } from "express";

import { HospitalController } from "./hospital.controller";
import { HospitalValidation } from "./hospital.validation";
import { checkAuth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";
import { UserRole } from "../../generated/prisma/enums";

const router = Router();

router.post(
	"/",
	checkAuth(UserRole.ADMIN),
	validateRequest(HospitalValidation.CreateHospitalZodSchema),
	HospitalController.createHospital,
);

router.get("/", checkAuth(UserRole.ADMIN), HospitalController.getAllHospitals);

router.get("/:id", checkAuth(), HospitalController.getSingleHospital);

router.patch(
	"/:id",
	checkAuth(UserRole.ADMIN),
	validateRequest(HospitalValidation.UpdateHospitalZodSchema),
	HospitalController.updateHospital,
);

router.delete("/:id", checkAuth(UserRole.ADMIN), HospitalController.deleteHospital);

export const HospitalRoutes = router;