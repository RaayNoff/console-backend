const uuid = require("uuid");
const path = require("path");

class FileService {
  saveFile(file) {
    try {
      const fileName = uuid.v4() + ".svg";
      const filePath = path.resolve("src", "static", fileName);
      file.mv(filePath);
      return fileName;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new FileService();
