const accessService = require("../services/access.service");
class AccessController {
  async checkAccess(req, res) {
    const { key } = req.body;

    const checkDBResponse = await accessService.checkAccess(key);

    res.json({ valid: checkDBResponse });
  }
}

module.exports = new AccessController();
