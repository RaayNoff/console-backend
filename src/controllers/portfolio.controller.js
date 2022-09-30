const portfolioService = require("../services/porfolio.service");
const accessService = require("../services/access.service");

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
      if (await accessService.checkAccess(req.body.key)) {
        const createDBResponse = await portfolioService.create(req.body);
        res.json(createDBResponse);
      } else {
        res.status(401).json("Client is not an admin");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Server cannot create case");
    }
  }

  async update(req, res) {
    try {
      if (await accessService.checkAccess(req.body.key)) {
        const updateDBResponse = await portfolioService.update(req.body);
        res.json(updateDBResponse);
      } else {
        res.status(401).json("Client in not an admin");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Server cannot update case");
    }
  }

  async delete(req, res) {
    try {
      if (await accessService.checkAccess(req.body.key)) {
        const id = req.params.id;

        const deleteDBResponse = await portfolioService.delete(id);

        res.json(deleteDBResponse);
      } else {
        res.status(401).json("Client is not an admin");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Server cannot delete case");
    }
  }
}

module.exports = new PortfolioController();
