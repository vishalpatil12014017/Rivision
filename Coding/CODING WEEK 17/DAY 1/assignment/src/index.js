const express = require('express');
const { body, validationResult } = require("express-validator")

const { SIGNUP, SIGNIN } = require("./controllers/auth.controller")
const postController = require("./controllers/post.controller")

const app = express();

app.use(express.json());

app.post("/SIGNUP",
    body("first_name").isLength({ min: 3 }).withMessage("Name must be greater than 3"),
    body("last_name").isLength({ min: 3 }).withMessage("Name must be greater than 3"),
    body("email").isEmail().withMessage("Please provide valide email address"),
    body("password").isLength({min:6,max:20}).withMessage("password must be greater than 6 and less than 20 charactors"),
    async (req, res, next) => {
        try {
            const errors = validationResult(req);
            let final = null;
            if (!errors.isEmpty()) {
                final = errors.array().map(error => {
                    return {
                        param: error.param,
                        masg: error.msg
                    }

                })
                return res.status(400).json({ errors: final })

            }
            next();
        } catch (err) {
            return res.status(400).json({ err: err.message })
        }
    },
SIGNUP);
app.post("/SIGNIN", SIGNIN);
app.use("/posts", postController)

module.exports = app;