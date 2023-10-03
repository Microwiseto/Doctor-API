const express = require("express")
const doctorController = require("../controllers/doctorController")
const router = express.Router();

router.get("/listings", doctorController.getDoctorList);
router.get("/:doctorId", doctorController.getDoctorDetails);
router.post("/:doctorId", doctorController.createBooking);

module.exports = router;