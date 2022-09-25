const skillsService = require("../services/skills.service");

class SkillsController {
  async getAll(req, res) {
    const skillsDbResponse = await skillsService.getAll();

    res.json(skillsDbResponse);
  }
}

module.exports = new SkillsController();
