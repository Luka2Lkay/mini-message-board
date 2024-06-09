const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");

const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/new", newRouter);

const port = 3000;

app.listen(port, () => {
  console.log(`app is running in http://localhost:${port}`);
});

module.exports = app;
