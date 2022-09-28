class DBQuerys {
  static getSkills() {
    return "SELECT * FROM skills";
  }

  static createPortolio() {
    return "INSERT INTO portfolio (name, description, url) VALUES ($1, $2, $3) RETURNING *";
  }

  static getPortfolio() {
    return "SELECT * FROM portfolio";
  }

  static deletePortfolio() {
    return "DELETE FROM portfolio WHERE id = $1 RETURNING *";
  }

  static updatePortfolio() {
    return "UPDATE portfolio SET name = $1, description = $2, url = $3 WHERE id = $4 RETURNING *";
  }

  static checkAccessKey() {
    return "SELECT * FROM access ";
  }
}

module.exports = DBQuerys;
