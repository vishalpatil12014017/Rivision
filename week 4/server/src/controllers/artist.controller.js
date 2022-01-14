const express = require("express");
const router = express.Router();
const Artist = require("../models/artist.model");
const crudcontroller = require("../crudcontroller/crud.controller");

// //find all information about Artist
// router.get("/:id",async (req,res)=>{
//     const artist=await Artist.findById(req.params.id).populate("jobId").populate("jobId.cityId").lean().exec();
//     return res.status(200).json({artist})
// })
router.post("", crudcontroller.post(Artist));
router.get("", crudcontroller.get(Artist));
router.get("/:id", crudcontroller.getOne(Artist));





module.exports = router