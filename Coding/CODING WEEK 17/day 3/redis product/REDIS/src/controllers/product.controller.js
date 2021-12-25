const express = require('express');

const router = express.Router();

const Product = require("../models/product.model")
const redis = require("../configs/redis")

router.get("/", (req, res) => {
    redis.get("products", async (err, pro) => {
        if (err) console.log(err);
        if (pro) return res.status(200).send({ redis: JSON.parse(pro) });

        const product = await Product.find().lean().exec();
        redis.set("products", JSON.stringify(product))
        return res.status(200).send({ db: product })
    })
})
router.post("/", async (req, res) => {
    const product = await Product.create(req.body);
    redis.set(`products.${req.params._id}`, JSON.stringify(product))
    const products = await Product.find().lean().exec();
    redis.set("products", JSON.stringify(products))
    return res.status(200).send({ product })
})

router.get("/:id", (req, res) => {
    redis.get(`products.${req.params.id}`, async (err, pro) => {
        if (err) console.log(err);
        if (pro) return res.status(200).send({ redis: JSON.parse(pro) });

        const product = await Product.findById(req.params.id).lean().exec();
        redis.set(`products.${req.params.id}`, JSON.stringify(product))
        return res.status(200).send({ db: product })
    })
})
router.patch("/:id", async (req, res) => {
    const product = await Product.findOneAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    redis.set(`products.${req.params.id}`, JSON.stringify(product))
    const products = await Product.find().lean().exec();
    redis.set("products", JSON.stringify(products))
    return res.status(201).send({ db: product })
})
router.delete("/:id", async (req, res) => {
    const product = await Product.findOneAndDelete(req.params.id).lean().exec();
    redis.del(`products.${req.params.id}`, JSON.stringify(product))
    const products = await Product.find().lean().exec();
    redis.set("products", JSON.stringify(products))
    return res.status(201).send({ db: product })
})
module.exports = router;