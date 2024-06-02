const express = require("express");
const app = express();
// const path = require("path");
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3000);
