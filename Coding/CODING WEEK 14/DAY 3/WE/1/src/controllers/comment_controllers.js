const express = require("express");
const Comment=require("../models/comment_model")
const router=express.Router();
//____________________CRUD APIS FOR comment___________________//
//POST creat comment
router.post("", async (req, res) => {
    const comments = await Comment.create(req.body)  // it is like db.comment
    return res.status(201).send({ comments });
})

// get req all comments
router.get("", async (req, res) => {
    // const comments = await Comment.find().lean().exec()  // it is like db.comment
    const comments = await Comment.find().sort({ name: 1 }).lean().exec()  // it is like db.comment.sort()
    return res.status(200).send({ comments });
})

// update the comment ===patch
router.patch("/:_id", async (req, res) => {
    const comments = await Comment.findByIdAndUpdate(req.params._id, req.body, { new: true }).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ comments });
})

// delete the comment 
router.delete("/:_id", async (req, res) => {
    const comments = await Comment.findByIdAndDelete(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ comments });
})

// find comment by id
router.get("/:_id", async (req, res) => {
    const comments = await Comment.findById(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ comments });
})

module.exports=router