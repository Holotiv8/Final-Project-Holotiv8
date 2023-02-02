const express = require('express')
const router = express.Router()
const idolRoutes= require('./idolRoutes')
const productRoutes = require('./productRoutes')

router.use('/idols', idolRoutes)
router.use('/product',productRoutes)




module.exports= router