const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");

router.get("/", homeController.getAll);
router.get("/:id", homeController.getById);
router.post("/", homeController.create);
router.put("/:id", homeController.update);

module.exports = router;
