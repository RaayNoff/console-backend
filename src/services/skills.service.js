const db = require("../data/db");
const DBQuerys = require("../data/querys");

class SkillsService {
  async getAll() {
    return await (
      await db.query(DBQuerys.getSkills())
    ).rows;
  }
}

module.exports = new SkillsService();
