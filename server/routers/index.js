const express = require('express')
const router = express.Router()
const idolRoutes= require('./idolRoutes')
const productRoutes = require('./productRoutes')
const userRoutes = require("./userRoutes");

router.use('/idols', idolRoutes)
router.use('/product',productRoutes)
router.use("/users", userRoutes);

module.exports = router;
