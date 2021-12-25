const express = require("express");
const sendMail = require("../middleware/sendmail")
const router = express.Router();

const User = require("../models/user.model");

router.get("", async function(req,res){
    const page = +req.query.page || 1;
    const size = +req.query.size || 10;
    const offset = (page-1)*size;
    const users = await User.find().skip(offset).limit(size).lean().exec();
    const totalUserCount = await User.find().countDocuments();
    const totalPages = Math.ceil(totalUserCount / size);
    return res.send({users, totalPages})
})

router.post("", async(req, res)=>{
    const newUser = await User.create(req.body);

    sendMail({
        from: "vishal@123.com",
        to: req.body.email,
        subject: `Welcome to ABC system ${req.body.first_name} ${req.body.last_name}`,
        text: `Hi ${req.body.first_name}, Please confirm your email address`,
        html: `<h1>Hi ${req.body.first_name}, Please confirm your email address</h1>`
    })

    sendMail({
        from: "vishal@123.com",
        to:"abc@gmail.com , xyz@gmail.com, pqr@gmail.com, llb@gmail.com, mbbs@gmail.com ",
        subject: `${req.body.first_name} ${req.body.last_name} has registered with us`,
        text: `Hii ${req.body.first_name} ${req.body.last_name}`,
        html: `<h1>Please welcome , ${req.body.first_name} ${req.body.last_name}</h1>`
    })

    return res.send({newUser})

})

module.exports = router;