import express from "express";
import { connect } from "mongoose";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routers/apiRouter.js";

const PORT = 3000;

const app = express(); // create express app server instance

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  // const name = req.params.name;
  // console.log(req.query);
  console.log(req.body);
  return res.json({ message: "ping" });
});

app.listen(PORT, () => {
  console.log("server listening on: http://localhost:", PORT);
  connectDB();
});
