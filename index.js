const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes");

const port = 3001;
const app = express();
app.use(express.json());
const mongodb =
  "mongodb+srv://Melusine:jyyxkn21@cluster0.q490z.mongodb.net/test";

mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;

database.on("error", console.error.bind(console, "connection error:"));
database.on("open", () => {
  console.log("Connected to database");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api", router);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
