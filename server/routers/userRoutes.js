const express = require("express");
const UserController = require("../controllers/UserContoller");
const router = express.Router();

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.patch('/subscribe', UserController.subscribe)

module.exports = router;
