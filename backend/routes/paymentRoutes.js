const express = require("express");
const router = express.Router();
const paymentController = require("../controllers/paymentController");

router.get("/", paymentController.getAll);
router.get("/:id", paymentController.getById);
router.post("/", paymentController.create);
router.put("/:id", paymentController.update);

module.exports = router;
