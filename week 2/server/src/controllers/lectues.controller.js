
const express = require("express");
const router = express.Router()
const Lectures = require("../models/lectures.model");
router.post("", async (req, res) => {
    const lectures = await Lectures.create(req.body)
    return res.status(201).send({ lectures })
})

//get request

router.get("", async (req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.size || 4;
    const offset = (page-1)*size;
    const lectures = await Lectures.find().skip(offset).limit(size).lean().exec();
    const totalUserCount = await Lectures.find().countDocuments();
    const totalPages = Math.ceil(totalUserCount / size);
    return res.status(200).send({ lectures })
})
//patch requests

router.patch("/:id", async (req, res) => {
    const lectures = await Lectures.findByIdAndUpdate(req.params.id, req.body)

    return res.status(200).send({ lectures })
})
module.exports = router;