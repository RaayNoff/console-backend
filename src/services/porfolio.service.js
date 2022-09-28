const db = require("../data/db");
const DBQuerys = require("../data/querys");

class PorfolioService {
  async getAll() {
    return await (
      await db.query(DBQuerys.getPortfolio())
    ).rows;
  }

  async create(data) {
    const { name, description, url } = data;
    return await (
      await db.query(DBQuerys.createPortolio(), [name, description, url])
    ).rows;
  }

  async update(data) {
    const { id, name, description, url } = data;

    return await (
      await db.query(DBQuerys.updatePortfolio(), [name, description, url, id])
    ).rows;
  }

  async delete(id) {
    return await (
      await db.query(DBQuerys.deletePortfolio(), [id])
    ).rows;
  }
}

module.exports = new PorfolioService();
