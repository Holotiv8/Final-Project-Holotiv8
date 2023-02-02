const express = require("express");
const router = express.Router();
const idolRoutes = require("./idolRoutes");
const userRoutes = require("./userRoutes");

router.use("/idols", idolRoutes);
router.use("/users", userRoutes);

module.exports = router;
