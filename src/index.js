import express from "express";
import { connect } from "mongoose";
import connectDB from "./config/dbConfig.js";
import apiRouter from "./routers/apiRouter.js";
import { isAuthenticated } from "./middlewares/authMiddleware.js";

const PORT = 3000;

const app = express(); // create express app server instance

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded());

app.use("/api", apiRouter); // If the url starts with /api then the request
// is forwarded to the apiRouter

app.get("/ping", isAuthenticated, (req, res) => {
  // const name = req.params.name;
  console.log(req.query);

  console.log(req.body);

  console.log(req.user);
  return res.json({ message: "ping" });
});

app.listen(PORT, () => {
  console.log("server listening on: http://localhost:", PORT);
  connectDB();
});
