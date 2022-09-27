const express = require("express");
const cors = require("cors");
const skillsRouter = require("./routes/skills.router");
const PORT = process.env.PORT || 8080;

const app = express();
app.use(cors({}));
app.use(express.json());
app.use("/api", skillsRouter);
app.use(express.static("src/static"));
app.listen(PORT, () => {
  console.log("SERVER STARTED ON PORT: " + PORT);
});
