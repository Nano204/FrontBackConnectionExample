const express = require("express");
const app = express();
const port = 3001;
const cors = require("cors");
const list = [];

app.use(express.json());
app.use(
  cors({
    allowedOrigins: ["http://localhost:3000"],
  })
);

app.post("/", (req, res) => {
  const { word } = req.body;
  list.push(word);
  res.status(201).json(list);

});

app.get("/", (req, res) => {
  res.status(200).json(list);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
