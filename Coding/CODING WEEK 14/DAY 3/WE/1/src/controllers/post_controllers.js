const express = require("express");

const Post=require("../models/post_model")
const User=require("../models/user_model")
const router=express.Router();
//____________________CRUD APIS FOR post___________________//
//POST creat post
router.post("", async (req, res) => {
    const posts = await Post.create(req.body)  // it is like db.post
    return res.status(201).send({ posts });
})

// // get req all posts
// router.get("", async (req, res) => {
//     // const posts = await Post.find().lean().exec()  // it is like db.post
//     const posts = await Post.find().sort({ name: 1 }).lean().exec()  // it is like db.post.sort()
//     return res.status(200).send({ posts });
// })
// get req all posts
router.get("", async (req, res) => {
    // const posts = await Post.find().lean().exec()  // it is like db.post
    // const posts = await Post.find().populate("auther").populate("tags").lean().exec()  // it will show all information about user
    const posts = await Post.find().populate({
        path:"auther",
        select:"first_name"
    }).populate("tags").lean().exec() 
    return res.status(200).send({ posts });
})

//it will find all post by perticular id
router.get("/user/:id", async (req, res) => {
    // const posts = await Post.find({auther:req.params.id}).populate({
    //     path:"auther",
    //     select:"first_name"
    // }).populate("tags").lean().exec() 
    const posts = await Post.find({auther:req.params.id}).lean().exec() ;
    const auther = await User.findById(req.params.id).lean().exec() 
    return res.status(200).send({ posts,auther });
})

// update the post ===patch
router.patch("/:_id", async (req, res) => {
    const posts = await Post.findByIdAndUpdate(req.params._id, req.body, { new: true }).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ posts });
})

// delete the post 
router.delete("/:_id", async (req, res) => {
    const posts = await Post.findByIdAndDelete(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ posts });
})

// find post by id
router.get("/:_id", async (req, res) => {
    const posts = await Post.findById(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ posts });
})
module.exports=router