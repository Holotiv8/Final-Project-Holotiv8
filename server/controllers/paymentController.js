const { User } = require("../models");
const midtransClient = require("midtrans-client");

class PaymentController {
  static async paymentSubscribe(req, res, next) {
    try {
      const user = await User.findByPk(req.user.id);
      if (user.isSubscribed === true) {
        throw { name: "already_subscribed" };
      }

      let snap = new midtransClient.Snap({
        // Set to true if you want Production Environment (accept real transaction).
        isProduction: false,
        serverKey: process.env.MIDTRANS_KEY,
      });

      let parameter = {
        transaction_details: {
          order_id:
            "YOUR-ORDERID-" + Math.floor(1000000 + Math.random() * 9000000),
          gross_amount: 100000,
        },
        credit_card: {
          secure: true,
        },
        customer_details: {
          email: user.email,
        },
      };

      const midtransToken = await snap.createTransaction(parameter);
      res.status(200).json(midtransToken);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = PaymentController;
