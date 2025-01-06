import express from "express";

const PORT = 3000;

const app = express(); // create express ap server instance

app.get("/", (req, res) => {
  return res.send("Home");
});

app.get("/ping", (req, res) => {
  return res.json({ message: "ping" });
});

app.get("/hello", (req, res) => {
  return res.json({ message: "Hellow World!" });
});

app.post("/hellow", (req, res) => {
  return res.json({ POST: "hellow world" });
});

app.put("/hellow", (req, res) => {
  return res.json({ PUT: "hellow world" });
});

app.delete("/hellow", (req, res) => {
  return res.json({ DELETE: "hellow world" });
});

app.listen(PORT, () => {
  console.log("server listening on: http://localhost:", PORT);
});
