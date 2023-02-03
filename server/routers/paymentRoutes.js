const express = require("express");
const PaymentController = require("../controllers/paymentController");
const router = express.Router();

router.post("/", PaymentController.paymentSubscribe);

module.exports = router;
