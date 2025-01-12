import express from "express";
import { connect } from "mongoose";
import connectDB from "./config/dbConfig.js";
import { createPost } from "./controllers/postController.js";

const PORT = 3000;

const app = express(); // create express app server instance

app.get("/ping", (req, res) => {
  return res.json({ message: "ping" });
});

function m1(req, res, next) {
  console.log("m1");
  next();
}
function m2(req, res, next) {
  console.log("m2");
  next();
}
function m3(req, res, next) {
  console.log("m3");
  next();
}

app.post("/posts", [m1, m2, m3], createPost);

app.listen(PORT, () => {
  console.log("server listening on: http://localhost:", PORT);
  connectDB();
});
