const express = require("express");
const router = express.Router();
const Album = require("../models/album.model");
const crudcontroller = require("../crudcontroller/crud.controller");
router.post("", crudcontroller.post(Album));
router.get("/:id", crudcontroller.getOne(Album));
router.get("", async (req, res) => {
    const page = +req.query.page || 1;
    const size = +req.query.size || 4;
    const genere = req.query.genre === "all" ? "" : req.query.genre;
    const sort = +req.query.sort;
    const name = req.query.byname;
    const offset = (page - 1) * size;
    // const totalUserCount = await Album.find().countDocuments();
    // const totalPages = Math.ceil(totalUserCount / size);
    if (genere || sort || name) {

        const album = await Album.find({ $and: [{ "genere": genere ? genere : { $ne: -1 } }, { "name": name ? name : { $ne: name } }] }).populate("songs").sort({ year: sort }).skip(offset).limit(size).lean().exec();
        const totalPages = Math.ceil(await Album.find({ $and: [{ "genere": genere ? genere : { $ne: -1 } }, { "name": name ? name : { $ne: name } }] }).countDocuments().lean().exec() / size)
        return res.status(200).json({ album, totalPages })
    } else {

        const album = await Album.find().populate("songs").skip(offset).limit(size).lean().exec()
        const totalPages = Math.ceil(await Album.find().populate("songs").countDocuments().lean().exec() / size)
        return res.status(200).json({ album, totalPages })
    }
    // const album = await Album.find().populate("songs").skip(offset).limit(size).lean().exec();
    // return res.status(200).json({ album, totalPages })
})
// router.get("", crudcontroller.get(Album));
module.exports = router