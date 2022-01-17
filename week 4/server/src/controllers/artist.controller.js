const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const Artist = require("../models/artist.model");
const crudcontroller = require("../crudcontroller/crud.controller");

// //find all information about Artist
router.get("", async (req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.size || 4;
    const offset = (page - 1) * size;
    const totalUserCount = await Artist.find().countDocuments();
    const totalPages = Math.ceil(totalUserCount / size);
    const artist = await Artist.find().skip(offset).limit(size).populate("albums").populate({
        path: "albums",
        populate: {
            path: "songs"
        }
    }).lean().exec();
    return res.status(200).json({ artist, totalPages })
})
router.post("/login", async (req, res) => {
    try {
        // First we will check if user with same email already exists
        let user = await Artist.findOne({ email: req.body.email }).lean().exec();

        // if not exists we throw an error
        if (!user) return res.status(400).send({ message: "Please check your email and password" });
        // if not match then we throw an error
        if (user.password !== req.body.password) {
            return res.status(400).send({ message: "Please check your email and password" });
        }

        return res.status(200).send({ user });

    } catch (err) {
        return res.status(500).send({ message: "Sorry for inconvenience please try again later" });
    }
})
router.post("", crudcontroller.post(Artist));

router.patch("/:id", async (req, res) => {
    console.log(req.params.id);
    const artist = await Artist.findByIdAndUpdate(req.params.id, req.body).lean().exec();
   
    return res.status(200).send({ artist });


})
// router.get("/:id", crudcontroller.getOne(Artist));





module.exports = router 
