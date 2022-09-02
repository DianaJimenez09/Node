const { Router } = require("express");
const router = Router();
const professionalController = require("../controller/reto1");
const profController = require("../controller/reto2");

router.get("/", professionalController.getStart);
router.get("/professional", professionalController.getProfessional);
// router.get("/professional/:id", professionalController.getUser2parms);
router.post("/professional", professionalController.postProfessional);
router.put("/professional", professionalController.putProfessional);
router.delete("/professional", professionalController.deleteProfessional);

router.get("/", profController.getProfes);
router.get("/profes", profController.getProfesId);
router.post("/profes", profController.postProfes);
router.put("/profes", profController.putProfes);
router.delete("/profes", profController.deleteProfes);

module.exports = router;
