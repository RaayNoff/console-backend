const accessController = require("../controllers/access.controller");

const Router = require("express").Router;

const router = new Router();

router.post("/access", accessController.checkAccess);

module.exports = router;
