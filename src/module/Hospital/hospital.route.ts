import { Router } from "express";

import { HospitalController } from "./hospital.controller";
import { HospitalValidation } from "./hospital.validation";
import { checkAuth } from "../../middleware/checkAuth";
import { validateRequest } from "../../middleware/validateRequest";

const router = Router();

router.post(
	"/",
	checkAuth("ADMIN"),
	validateRequest(HospitalValidation.CreateHospitalZodSchema),
	HospitalController.createHospital,
);

router.get("/", checkAuth(), HospitalController.getAllHospitals);

router.get("/:id", checkAuth(), HospitalController.getSingleHospital);

router.patch(
	"/:id",
	checkAuth("ADMIN"),
	validateRequest(HospitalValidation.UpdateHospitalZodSchema),
	HospitalController.updateHospital,
);

router.delete("/:id", checkAuth("ADMIN"), HospitalController.deleteHospital);

export const HospitalRoutes = router;