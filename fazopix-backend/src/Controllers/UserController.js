const userRepository = require("../Repository/UserRepository");

module.exports = {
  async getUser(req, res) {
    try {
      const { userId } = req.params;
      const user = await userRepository.getUser(userId);
      if (user.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user[0]);
    } catch (err) {
      res.status(500).json({
        error: "Internal server error.",
      });
    }
  },

  async createUser(req, res) {
    try {
      const { name, email, password } = req.body;
      const user = await userRepository.createUser(name, email, password);
      if (!user)
        return res.status(409).json({ error: "E-mail already in use." });
      return res.status(200).json({ user });
    } catch (err) {
      res.status(500).json({
        error: "Internal server error.",
      });
    }
  },

  async loginUser(req, res) {
    try {
      const { email, password } = req.body;
      const user = await userRepository.loginUser(email, password);

      if (user.error === 404)
        return res.status(404).json({
          error: "No account with this registered email.",
        });

      if (user.error === 401)
        return res.status(401).json({
          error: "Wrong password.",
        });

      return res.status(200).json({
        user,
        token: "token",
      });
    } catch (err) {
      res.status(500).json({
        error: "Internal server error.",
      });
    }
  },
};
