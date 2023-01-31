const express = require('express')
const router = express.Router()
const idolRoutes= require('./idolRoutes')



router.use('/idols', idolRoutes)





module.exports= router