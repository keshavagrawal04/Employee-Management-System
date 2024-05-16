const { userController } = require("../controllers");
const router = require("express").Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.get("/view/:id", userController.getUser);
router.get("/view", userController.getUsers);

module.exports = router;
