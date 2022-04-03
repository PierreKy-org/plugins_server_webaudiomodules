const express = require("express");
const cors = require("cors");
const path = require("path");

const repositories = require("./repositories.json");
const plugins = require("./plugins.json");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/plugins", express.static(path.join(__dirname, "plugins")));

//Renvois les différents dossiers de plugins (pas forcément sur ce serveur)
app.get("/repositories", (req, res) => {
  res.send(repositories);
});

//Renvois la liste des plugins sur le serveur
app.get("/plugins", (req, res) => {
  res.send(plugins.map((plugin) => `${req.protocol}://${req.get("Host")}/plugins/${plugin}/`));
});

app.use("/", express.static(path.join(__dirname, "TER")));

app.listen(port, () => {
  console.log(`App: http://localhost:${port}`);
});
