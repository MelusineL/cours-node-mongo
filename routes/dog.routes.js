const express = require("express");
const router = express.Router();

const DogController = require("../controller/dog.controller.js");

router.get("/dogs", dogController.getAll);
