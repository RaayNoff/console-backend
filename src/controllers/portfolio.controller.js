const portfolioService = require("../services/porfolio.service");

class PortfolioController {
  async getAll(req, res) {
    try {
      const getAllDBResponse = await portfolioService.getAll();
      res.json(getAllDBResponse);
    } catch (error) {
      console.log(error);
      res.status(500).json("Server cannot return all cases");
    }
  }

  async create(req, res) {
    try {
      const createDBResponse = await portfolioService.create(req.body);
      res.json(createDBResponse);
    } catch (error) {
      console.log(error);
      res.status(500).json("Server cannot create case");
    }
  }

  async update(req, res) {
    try {
      const updateDBResponse = await portfolioService.update(req.body);
      res.json(updateDBResponse);
    } catch (error) {
      console.log(error);
      res.status(500).json("Server cannot update case");
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;

      const deleteDBResponse = await portfolioService.delete(id);

      res.json(deleteDBResponse);
    } catch (error) {
      clg(error);
      res.status(500).json("Server cannot delete case");
    }
  }
}

module.exports = new PortfolioController();
