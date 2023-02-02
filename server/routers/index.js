const express = require('express')
const router = express.Router()
const idolRoutes= require('./idolRoutes')
const productRoutes = require('./productRoutes')
const userRoutes = require("./userRoutes");
const favoriteRoutes = require('./favoriteRoutes')

router.use('/idols', idolRoutes)
router.use('/favorite',favoriteRoutes)
router.use('/product',productRoutes)
router.use("/users", userRoutes);

module.exports = router;
