import express from "express";
import { connect } from "mongoose";
import connectDB from "./config/dbConfig.js";

const PORT = 3000;

const app = express(); // create express app server instance

app.get("/ping", (req, res) => {
  return res.json({ message: "ping" });
});

app.listen(PORT, () => {
  console.log("server listening on: http://localhost:", PORT);
  connectDB();
});
