const { User } = require("../models");
const midtransFunction = require("../helpers/payment");

class PaymentController {
  static async paymentSubscribe(req, res, next) {
    try {
      const user = await User.findByPk(req.user.id);
      if (user.isSubscribed === true) {
        throw { name: "already_subscribed" };
      }

      let midtransToken= await midtransFunction(user);
      // await User.update({isSubscribed : true}, {where: {id:req.user.id}})
      res.status(200).json(midtransToken);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = PaymentController;
