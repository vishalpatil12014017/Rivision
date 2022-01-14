const express = require("express");
const router = express.Router();
const Song = require("../models/song.model");
const crudcontroller = require("../crudcontroller/crud.controller");
router.post("", crudcontroller.post(Song));
router.get("", crudcontroller.get(Song));
router.get("/:id", crudcontroller.getOne(Song));

module.exports = router