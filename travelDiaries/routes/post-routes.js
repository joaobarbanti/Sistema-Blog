const Postcontrollers = require("../controllers/post-controller")
const { Router } = require("express");
const router = Router();

router.get("/", Postcontrollers.getAllPosts);
router.get("/:id", Postcontrollers.getPostById);
router.post("/", Postcontrollers.addPost);
router.put("/:id", Postcontrollers.updatePost);
router.delete("/:id", Postcontrollers.deletePost);

module.exports = router