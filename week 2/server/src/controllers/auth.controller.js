const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/user.model")

const newToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
}

const SIGNUP = async (req, res) => {

    let user;
    try {
        user = await User.findOne({ email: req.body.email })
        if (user) return res.status(400).send({ message: "Please check your email and password" });
        user = await User.create(req.body);
        const token = newToken(user)
        return res.status(200).send({user, token});

    } catch (err) {
        return res.status(500).send({ message: "Sorry for inconvenience please try again later" });
    }
}

const SIGNIN = async (req, res) => {

    try {

        let user = await User.findOne({ email: req.body.email });


        if (!user) return res.status(400).send({ message: "Please check your email" });


        // let match = user.checkPassword(req.body.password);


        // if (!match) return res.status(400).send({ message: "Please check your email and password" });
        const token = newToken(user)
        return res.status(200).send({ user, token });

    } catch (err) {
        return res.status(500).send({ message: "Sorry for inconvenience please try again later" });
    }
}

module.exports = { SIGNUP, SIGNIN }