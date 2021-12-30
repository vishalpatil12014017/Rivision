
const express=require("express");
const router=express.Router()
const Student=require("../models/student.model");
const authenticate=require("../middlewares/authenticate");
const authorize=require("../middlewares/authorize");
router.post("",authenticate,authorize(["student"]),async function (req,res) {
    const student=await Student.create(req.body);
    return res.send({student:student})
})
router.get("",authenticate,authorize(["Admin","instructor"]),async function (req,res) {
    const student=await Student.find().lean().exec();
    return res.send({student:student})
})
module.exports = router;