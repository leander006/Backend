const express = require("express");

const fs = require("fs");
const app = express();

app.get("/files", (req, res) => {
  fs.readdir("./", function (err, files) {
    if (err) {
      return res.status(404).json("Something went wrong");
    }
    res.status(200).json({
      files,
    });
  });
});

app.get("/files/:filename", (req, res) => {
  const name = req.params.filename;
  fs.readFile(name, "utf-8", function (err, file) {
    if (err) {
      res.status(404).json("Something went wrong", err);
    } else {
      res.status(200).json({
        file,
      });
    }
  });
});

app.listen(3001, () => {
  console.log("File server running on 3001");
});
