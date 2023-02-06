const express = require("express");
const PaymentController = require("../controllers/paymentController");
const authentication = require("../middlewares");
const router = express.Router();
// console.log('<><<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
router.post("/", authentication, PaymentController.paymentSubscribe);

module.exports = router;
