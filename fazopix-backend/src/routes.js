const router = require("express").Router();

// controllers
const userController = require("./Controllers/UserController");

router.post("/login", userController.loginUser);

router.post("/register", userController.createUser);

router.get("/getuser/:userId", userController.getUser);

module.exports = router;
