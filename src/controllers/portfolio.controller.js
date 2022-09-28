const portfolioService = require("../services/porfolio.service");

class PortfolioController {
  async getAll(req, res) {
    const getAllDBResponse = await portfolioService.getAll();
    res.json(getAllDBResponse);
  }

  async create(req, res) {
    const createDBResponse = await portfolioService.create(req.body);
    res.json(createDBResponse);
  }

  async update(req, res) {
    const updateDBResponse = await portfolioService.update(req.body);
    res.json(updateDBResponse);
  }

  async delete(req, res) {
    const id = req.params.id;

    const deleteDBResponse = await portfolioService.delete(id);

    res.json(deleteDBResponse);
  }
}

module.exports = new PortfolioController();
