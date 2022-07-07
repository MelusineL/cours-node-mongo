const express = require("express");
const Dog = require("./models/dog.model");

const router = express.Router();

//
router.get("/dogs", async (req, res) => {
  const dogs = await Dog.find();
  res.send(dogs);
});

router.post("/dog", async (req, res) => {
  const dog = new Dog({
    name: req.body.name,
    color: req.body.color,
    race: req.body.race,
    age: req.body.age,
  });
  await dog.save();
  res.send(dog);
});

module.exports = router;
