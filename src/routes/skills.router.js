const Router = require("express").Router;

const router = new Router();
const SkillsController = require("../controllers/skills.controller");

router.get("/skills", SkillsController.getAll);
router.post("/skills", SkillsController.create);
router.put("/skills", SkillsController.update);
router.delete("/skills/:id", SkillsController.delete);

module.exports = router;
