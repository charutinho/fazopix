const userRepository = require("../Repository/UserRepository");

module.exports = {
  async userCreate(req, res) {
    // const response = { ...respondeModel };
    // return res.json(response);
  },

  async userLogin(req, res) {
    // const response = { ...respondeModel };
    // return res.json(response);
  },

  async getUser(req, res) {
    try {
      const { userId } = req.params;
      const user = await userRepository.getUser(userId);
      if (user.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      return res.status(200).json(user);
    } catch (err) {
      res.status(500).json({
        error: "Internal server error.",
      });
    }
  },
};
