const portfolioController = require("../controllers/portfolio.controller");

const Router = require("express").Router;

const router = new Router();

router.get("/portfolio", portfolioController.getAll);
router.post("/portfolio", portfolioController.create);
router.put("/portfolio", portfolioController.update);
router.delete("/portfolio/:id", portfolioController.delete);

module.exports = router;
