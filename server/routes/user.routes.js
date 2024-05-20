const { userController } = require("../controllers");
const router = require("express").Router();

router.post("/login", userController.login);
router.post("/register", userController.register);
router.post("/invite", userController.inviteEmployee);
router.get("/verify-invite-token", userController.verifyInviteToken);
router.get("/view/:id", userController.getUser);
router.get("/view", userController.getUsers);

module.exports = router;
