import express from "express";
import { connect } from "mongoose";
import connectDB from "./config/dbConfig.js";
import { createPost } from "./controllers/postController.js";

const PORT = 3000;

const app = express(); // create express app server instance

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.get("/ping", (req, res) => {
  // const name = req.params.name;
  console.log(req.query);
  console.log(req.body);
  return res.json({ message: "ping" });
});

app.post("/posts", createPost);

app.listen(PORT, () => {
  console.log("server listening on: http://localhost:", PORT);
  connectDB();
});
