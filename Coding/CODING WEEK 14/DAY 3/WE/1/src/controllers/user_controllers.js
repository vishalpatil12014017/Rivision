const express = require("express");

const User=require("../models/user_model")
const router=express.Router();
//____________________CRUD APIS FOR USER___________________//
//POST creat user
router.post("", async (req, res) => {
    const users = await User.create(req.body)  // it is like db.user
    return res.status(201).send({ users });
})

// get req all users
router.get("", async (req, res) => {
    // const users = await User.find().lean().exec()  // it is like db.user
    const users = await User.find().sort({ name: 1 }).lean().exec()  // it is like db.user.sort()
    return res.status(200).send({ users });
})


// update the user ===patch
router.patch("/:_id", async (req, res) => {
    const users = await User.findByIdAndUpdate(req.params._id, req.body, { new: true }).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ users });
})

// delete the user 
router.delete("/:_id", async (req, res) => {
    const users = await User.findByIdAndDelete(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ users });
})

// find user by id
router.get("/:_id", async (req, res) => {
    const users = await User.findById(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ users });
})

module.exports=router