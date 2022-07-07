const mongoose = require("mongoose");
const router = require("../routes");

const schema = mongoose.Schema({
  name: String,
  color: String,
  race: String,
  age: Number,
});

module.exports = mongoose.model("Dog", schema);
