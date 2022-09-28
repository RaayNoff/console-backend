const db = require("../data/db");
const DBQuerys = require("../data/querys");

class AccessService {
  async checkAccess(key) {
    const dbkey = await (await db.query(DBQuerys.checkAccessKey())).rows[0].key;

    if (key === dbkey) return true;

    return false;
  }
}

module.exports = new AccessService();
