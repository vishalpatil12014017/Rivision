const express = require("express");

const Tag=require("../models/tag_model")
const router=express.Router();
//____________________CRUD APIS FOR tag___________________//
//POST creat tag
router.post("", async (req, res) => {
    const tags = await Tag.create(req.body)  // it is like db.tag
    return res.status(201).send({ tags });
})

// get req all tags
router.get("", async (req, res) => {
    // const tags = await Tag.find().lean().exec()  // it is like db.tag
    const tags = await Tag.find().sort({ name: 1 }).lean().exec()  // it is like db.tag.sort()
    return res.status(200).send({ tags });
})

// update the tag ===patch
router.patch("/:_id", async (req, res) => {
    const tags = await Tag.findByIdAndUpdate(req.params._id, req.body, { new: true }).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ tags });
})

// delete the tag 
router.delete("/:_id", async (req, res) => {
    const tags = await Tag.findByIdAndDelete(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ tags });
})

// find tag by id
router.get("/:_id", async (req, res) => {
    const tags = await Tag.findById(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ tags });
})

module.exports=router