const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());

let blogList = [];

app.get("/blogs", (req, res) => {
  return res.status(200).json({
    data: blogList,
    success: true,
  });
});

app.post("/blogs", (req, res) => {
  const newBlog = {};

  blogList.push({
    title: req.body.title,
    des: req.body.desc,
    id: Math.random() * 1000000000000000,
  });
  return res.status(201).json({
    data: "Added successfully",
    success: true,
  });
});

app.get("/blogs/:id", (req, res) => {
  const result = blogList.filter((blog) => blog.id == req.params.id);
  return res.status(201).json({
    data: result,
    success: true,
  });
});

app.delete("/blogs/:id", (req, res) => {
  blogList = blogList.filter((blog) => blog.id != req.params.id);
  return res.status(201).json({
    data: blogList,
    success: true,
  });
});

app.listen(3001, function process() {
  console.log("Express app working on port 3001");
});
