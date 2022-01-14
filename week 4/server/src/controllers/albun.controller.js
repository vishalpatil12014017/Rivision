const express = require("express");
const router = express.Router();
const Album = require("../models/album.model");
const crudcontroller = require("../crudcontroller/crud.controller");
router.post("", crudcontroller.post(Album));
router.get("/:id", crudcontroller.getOne(Album));
router.get("",async (req,res)=>{
    const album=await Album.find().populate("songs").lean().exec();
    return res.status(200).json({album})
})
// router.get("", crudcontroller.get(Album));
module.exports = router