const express = require('express');

const router = express.Router();

const Product = require("../models/product.model")

const authenticate = require('../middlewares/authenticate')

router.get("/new", function(req, res) {
    return res.render("products/new")
})

router.get("/", authenticate, async function(req, res) {
    const products = await Product.find().lean().exec();
    const user = req.user;

     delete user.password  // =>this is used to remove password
    return res.send({products, user})
})

module.exports = router;