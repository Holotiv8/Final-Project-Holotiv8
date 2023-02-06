const { User } = require("../models");
const { comparePassword, createToken } = require("../helpers");

class UserController {
  static async register(req, res, next) {
    try {
      const { username, email, password } = req.body;
      const user = await User.create({
        username,
        email,
        password,
        isSubscribed: false
      });
      res.status(201).json({ id: user.id, email: user.email });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw { name: "InvalidCredentials" };
      }

      const validatePassword = comparePassword(password, user.password);
      if (!validatePassword) {
        throw { name: "InvalidCredentials" };
      }

      let payload = { id: user.id };
      const access_token = createToken(payload);
      res.status(200).json({ access_token, username: user.username, isSubscribed: user.isSubscribed });
    } catch (error) {
      next(error);
    }
  }

  static async subscribe(req, res, next) {
    try {
      const { id } = req.user;
      await User.update(
        {
          isSubscribed: true,
        },
        { where: { id } }
      );
      res.status(200).json({ message: "Success updated status" });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = UserController;
