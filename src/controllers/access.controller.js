const accessService = require("../services/access.service");
class AccessController {
  async checkAccess(req, res) {
    try {
      const { key } = req.body;

      const checkDBResponse = await accessService.checkAccess(key);

      res.json({ valid: checkDBResponse });
    } catch (error) {
      console.log(error);
      res.status(500).json("Server cannot check the key");
    }
  }
}

module.exports = new AccessController();
