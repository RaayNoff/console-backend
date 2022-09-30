const skillsService = require("../services/skills.service");
const accessService = require("../services/access.service");
class SkillsController {
  async getAll(req, res) {
    try {
      const skillsDbResponse = await skillsService.getAll();

      res.json(skillsDbResponse);
    } catch (error) {
      console.log(error);
      res.status(500).json("Server cannot return skills");
    }
  }
  async create(req, res) {
    try {
      if (await accessService.checkAccess(req.body.key)) {
        const newSkill = await skillsService.create(
          req.body,
          req.files.picture
        );
        res.json(newSkill);
      } else {
        res.status(401).json("Client is not an admin");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Can't create a skill");
    }
  }
  async update(req, res) {
    try {
      if (await accessService.checkAccess(req.body.key)) {
        const updatedSkill = await skillsService.update(req);
        res.json(updatedSkill);
      } else {
        res.status(401).json("Client is not an admin");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Cannot update skill");
    }
  }
  async delete(req, res) {
    try {
      if (await accessService.checkAccess(req.body.key)) {
        const deletedSkill = await skillsService.delete(req.params.id);

        res.json(deletedSkill);
      } else {
        res.status(401).json("Client is not an admin");
      }
    } catch (error) {
      console.log(error);
      res.status(500).json("Cannot delete skill");
    }
  }
}

module.exports = new SkillsController();
