const express = require("express");
const cors = require("cors");
const path = require("path");

const plugins_list = require("./repositories.json");
const app = express();
const port = 3000;

app.use(cors());
app.use("/plugins", express.static(path.join(__dirname, "plugins")));

//Renvois les différents dossiers de plugins (pas forcément sur ce serveur)
app.get("/", (req, res) => {
  res.send(plugins_list["repositories"].map((repo) => repo).join("\n"));
});

//Renvois la liste des plugins sur le serveur
app.get("/plugins", (req, res) => {
  const folder = "./plugins/";
  const protocol = req.protocol;
  const host = req.hostname;
  const url = req.originalUrl;
  const fs = require("fs");
  fs.readdir(folder, (err, files) => {
    plugins = [];
    files.forEach((file) => {
      let urlIndex = `${protocol}://${host}:${port}${url}/${file}/`;
      plugins.push(urlIndex);
    });
    res.send(plugins);
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
