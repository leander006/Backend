const express = require("express");

const app = express();

const connect = require("./config/mongoSetup");

connect();

app.listen(3000, (req, res) => {
  console.log("runnig on port 3000");
});
