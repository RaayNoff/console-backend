const db = require("../data/db");
const DBQuerys = require("../data/querys");
const fileService = require("../services/file.service");

class SkillsService {
  async getAll() {
    return await (
      await db.query(DBQuerys.getSkills())
    ).rows;
  }

  async create(body, picture) {
    const { name, stars } = body;
    const fileName = fileService.saveFile(picture);
    return await (
      await db.query(DBQuerys.createSkill(), [name, fileName, stars])
    ).rows;
  }

  async update(req) {
    const { id, name, stars, image } = req.body;

    const previousSkill = await (
      await db.query(DBQuerys.getSkillImage(), [id])
    ).rows[0];

    if (req.files) {
      fileService.deleteFile(previousSkill.image);
      const newImageName = fileService.saveFile(req.files.picture);
      return await (
        await db.query(DBQuerys.updateSkill(), [name, newImageName, stars, id])
      ).rows[0];
    } else {
      return await (
        await db.query(DBQuerys.updateSkill(), [name, image, stars, id])
      ).rows;
    }
  }

  async delete(id) {
    const prevSkill = await (
      await db.query(DBQuerys.deleteSkill(), [id])
    ).rows[0];
    console.log(prevSkill);

    fileService.deleteFile(prevSkill.image);

    return prevSkill;
  }
}

module.exports = new SkillsService();
