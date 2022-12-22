const userControllers = require("../controllers/user-controllers")
const { Router } = require("express");
const router = Router();

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getUserById);
router.post("/signup", userControllers.signup);
router.post("/login", userControllers.login);

module.exports = router