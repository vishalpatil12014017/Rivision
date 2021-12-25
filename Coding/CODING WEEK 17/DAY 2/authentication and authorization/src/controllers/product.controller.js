const express = require('express');

const router = express.Router();

const Product = require("../models/product.model")

const authenticate = require('../middlewares/authenticate')
const authorize = require('../middlewares/authorize');

router.get("/new", function(req, res) {
    return res.render("products/new")
})

router.post("/", authenticate, async function(req, res) {
    const products = await Product.create(req.body);
    return res.send({products})
})
router.get("/", authenticate, authorize(["seller","user", "admin"]), async function(req, res) {
    const products = await Product.find().lean().exec();
    const user = req.user;
    delete user.password
    return res.send({products, user})
})
router.patch("/:id", authenticate, authorize(["seller", "admin"]), async function(req, res) {
    const products = await Product.findOneAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    const user = req.user;
    delete user.password
    return res.send({products, user})
})
router.delete("/:id", authenticate, authorize(["seller", "admin"]), async function(req, res) {
    const products = await Product.findOneAndDelete(req.params.id).lean().exec();
    const user = req.user;
    delete user.password
    return res.send({products, user})
})
module.exports = router;