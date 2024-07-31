const express = require("express");
const router = express.Router();
const residentController = require("../controllers/residentController");

router.get("/", residentController.getAll);
router.get("/:id", residentController.getById);
router.post("/", residentController.create);
router.put("/:id", residentController.update);

module.exports = router;
