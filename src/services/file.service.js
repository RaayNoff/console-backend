const uuid = require("uuid");
const path = require("path");
const fs = require("fs");

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
  async deleteFile(fileName) {
    try {
      const filePath = path.resolve("src", "static", fileName);
      await fs.rm(filePath, () => {
        console.log(`File ${fileName} has been deleted`);
      });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new FileService();
