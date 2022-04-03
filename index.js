const express = require("express");
const cors = require("cors");
const path = require("path");

const repositories = require("./repositories.json");
const plugins = require("./plugins.json");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get("/repositories", (req, res) => {
  res.send(repositories);
});

app.get("/plugins", (req, res) => {
  res.send(plugins.map((plugin) => `https://${req.get("Host")}/plugins/${plugin}/`));
});

app.use("/", express.static("TER"));

app.use("/plugins", express.static("plugins"));

app.listen(port, () => {
  console.log(`App: http://localhost:${port}`);
});
