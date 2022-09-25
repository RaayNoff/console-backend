const Router = require("express").Router;

const router = new Router();
const SkillsController = require("../controllers/skills.controller");

router.get("/skills", SkillsController.getAll);

module.exports = router;
