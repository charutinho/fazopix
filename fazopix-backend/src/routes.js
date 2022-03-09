const router = require("express").Router();

// controllers
const userController = require("./Controllers/UserController");

router.post("/login", userController.userLogin);

router.get("/getuser/:userId", userController.getUser);

module.exports = router;
