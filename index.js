const express = require("express");
const app = express();
const port = 3333;

app.use(express.static("static"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", {});
});

app.get("/login", (req, res) => {
  res.render("login", {});
});

app.get("/signup", (req, res) => {
  res.render("signup", {});
});

app.get("/alert", (req, res) => {
  res.render("alert-template", {});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
