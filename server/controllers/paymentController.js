const { User } = require("../models");
const midtransClient = require("midtrans-client");
const midtransFunction = require("../helpers/payment");

class PaymentController {
  static async paymentSubscribe(req, res, next) {
    try {
      const user = await User.findByPk(req.user.id);
      if (user.isSubscribed === true) {
        throw { name: "already_subscribed" };
      }

      let midtransToken= await midtransFunction(user)
      res.status(200).json(midtransToken);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = PaymentController;
