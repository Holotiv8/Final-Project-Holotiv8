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
        throw { name: "Credential" };
      }

      const validatePassword = comparePassword(password, user.password);
      if (!validatePassword) {
        throw { name: "Credential" };
      }

      let payload = { id: user.id };
      const access_token = createToken(payload);
      res.status(200).json({ access_token, username: user.username });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = UserController;
