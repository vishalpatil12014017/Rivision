
const express = require('express');
const router = express.Router();
const User = require('../models/user.model')
const { body, validationResult } = require('express-validator');
router.post("",
    body("first_name").isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    body("last_name").isLength({ min: 1 }).withMessage('must be at least 1 chars long'),
    body('email').custom(value => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
            return (true)
        } else {
            throw new Error("Email adress must be valid");
        }
    }),
    body("gender").custom(value => {
        if (value == "Male" || value == "Female" || value == "Others") {
            return true;
        }else{
            throw new Error("gender must be Male,Female or Others")
        }
           
    }),
    body('pincode').isLength({ min: 6, max: 6 }).withMessage('must be 6 digits long'),
    body('age').custom(value => {
        if (value >= 1 && value <=100){
            return true;
        } else{
            throw new Error("must be greater than 1 and less than 100")
        }
    }),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ data: errors.array() })
        }

        try {
            const user = await user.create(req.body)
            return res.status(201).json({ User })
        }
        catch (err) {
            return res.status(400).send({ err: err.message })

        }
    })
module.exports = router;