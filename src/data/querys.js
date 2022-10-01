class DBQuerys {
  static getSkills() {
    return "SELECT * FROM skills";
  }

  static createSkill() {
    return "INSERT INTO skills (name, image, stars) VALUES ($1, $2, $3) RETURNING *";
  }

  static getSkillImage() {
    return "SELECT * FROM skills WHERE id = $1";
  }

  static updateSkill() {
    return "UPDATE skills SET name = $1, image = $2, stars = $3 WHERE id = $4 RETURNING *";
  }

  static deleteSkill() {
    return "DELETE FROM skills WHERE id = $1 RETURNING *";
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

  static deleteAccessKey() {
    return "DELETE FROM access";
  }

  static setAccessKey() {
    return "INSERT INTO access (key) VALUES ($1)";
  }
}

module.exports = DBQuerys;
