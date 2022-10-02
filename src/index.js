const express = require("express");
const cors = require("cors");
const skillsRouter = require("./routes/skills.router");
const portfolioRouter = require("./routes/portfolio.router");
const accessRouter = require("./routes/access.router");
const fileUpload = require("express-fileupload");
const keyService = require("./services/key.service");
const PORT = process.env.PORT || 8080;

setInterval(keyService.changeKey, 3600000);

const app = express();
app.use(cors({}));
app.use(fileUpload());
app.use(express.json());
app.use("/api", skillsRouter);
app.use("/api", portfolioRouter);
app.use("/api", accessRouter);
app.use(express.static("src/static"));
app.listen(PORT, () => {
  console.log("SERVER STARTED ON PORT: " + PORT);
});
