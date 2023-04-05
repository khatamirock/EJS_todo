const express = require("express");
const bodyParser = require("body-parser");
const dateOb = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
var name = "";
app.post("/", (req, res) => {
  var body = req.body;
  res.send(body["came"]);
  console.log(dateOb());
  // console.log(req.body);
});
app.get("/vaire", (req, res) => {
  var body = req.body;
  console.log(body.input);
  res.render("list", { vaii: "khatami", name: name });
});

app.post("/vaire", (req, res) => {
  var body = req.body;
  console.log(body.input);
  res.render("list", { vaii: "khatami", name: body.input });
});

app.get("/kemon", (req, res) => {
  let xx = "";
  let date = new Date();
  if (date.getDay() === 1) {
    xx = "kire vaii";
  } else {
    console.log(date.getDay());
    xx = "vaire vai";
  }
  res.send(xx);
});

app.get("/koi", (req, res) => {
  console.log("get korona get korona!!!");
  res.sendFile(__dirname + "/index.html");
});
app.post("/koi", (req, res) => {
  console.log("post korona post korona!!!");
  res.sendFile(__dirname + "/index.html");
});
app.listen(8080, function () {
  console.log("Server is running on 8080");
});
