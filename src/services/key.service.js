const db = require("../data/db");
const DBQuerys = require("../data/querys");
const uuid = require("uuid");

class KeyService {
  async changeKey() {
    try {
      db.query(DBQuerys.deleteAccessKey());

      await db.query(DBQuerys.setAccessKey(), [uuid.v4()]);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new KeyService();
