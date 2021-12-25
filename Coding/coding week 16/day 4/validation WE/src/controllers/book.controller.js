
const express = require('express');
const router = express.Router();
const Book = require('../models/book.model')
const { body, validationResult } = require('express-validator');
router.post("",
    body("title").isLength({ min: 5 }).withMessage('must be at least 5 chars long'),
    body('price').custom(value => {
        if (value <= 0) throw new Error("price must be greater then 1");
        return true;
    }),

    body("pages").custom(value => {
        if (value <= 10) throw new Error("pages must be greater then 10");
        return true;
    }),
    async (req, res) => {
        const errors = validationResult(req);
        let finalErrors = null;
        if (!errors.isEmpty()) {
            // finalErrors=errors.array().map(error=>{
            //     return{
            //         param:error.param,
            //         msg:error.msg,
            //     }
            // })

            //we can right like above also 
            return res.status(400).json({ data: errors.array() })
        }

        try {
            const book = await Book.create(req.body)
            return res.status(201).json({ book })
        }
        catch (err) {
            return res.status(400).send({ err: err.message })

        }
    })

// router.patch("/:bookId",
//     body("auther").custom(async (value, { req }) => {
//         const book = await Book.findById(req.params.bookId).lean().exec();
//         if (book.auther != value) throw new Error("This person cannot edit");
//         return true;

//     }),
//     async function (req, res) {
//         const errors = validationResult(req);
//         let finalErrors = null;

//         if (!errors.isEmpty()) {
//             finalErrors = errors.array().map(error => {
//                 return {
//                     param: error.param,
//                     msg: error.msg,
//                 }
//             })
//             return res.status(400).json({ errors: finalErrors })
//     }
//     return res.send("hello")
// })


    module.exports = router;