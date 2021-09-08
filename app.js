const express = require("express");

const path = require("path");
const app = express();

// console.log(path.join(__dirname));

app.set("view engine", "hbs"); // for serving dynamic files (template engines)

console.log();

const pathviews = path.join(__dirname, "/templates/views");

app.set("views", pathviews);

// app.use(express.static("public")); // for serving static files

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3001, () => {
  console.log("server running at port 3001");
});
