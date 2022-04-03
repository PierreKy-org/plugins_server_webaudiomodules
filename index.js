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

app.use("/", express.static(path.join(__dirname, "TER")));

app.use("/plugins", express.static(path.join(__dirname, "plugins")));

app._router.stack.forEach(function (r) {
  if (r.route && r.route.path) {
    console.log(r.route.path);
  }
});

console.log("PATHS", path.join(__dirname, "TER"), path.join(__dirname, "plugins"));

app.listen(port, () => {
  console.log(`App: http://localhost:${port}`);
});
