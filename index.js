const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const pacients = require("./src/pacients/pacients.json");

app.get("/pacients", (req, res) => {
  return res.json(pacients);
});

app.listen(port, () => {
  console.log("Server está funfando");
});
