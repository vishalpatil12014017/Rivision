const express = require('express');

const router = express.Router();

const Wetherforcast = require("../models/wether_forcast.model")
const redis = require("../configs/redis")

router.get("/", (req, res) => {
    redis.get("wether_forcasts", async (err, forcasts) => {
        if (err) console.log(err);
        if (forcasts) return res.status(200).send({ redis: JSON.parse(forcasts) });

        const wetherforcast = await Wetherforcast.find().lean().exec();
        redis.set("wether_forcasts", JSON.stringify(wetherforcast))
        return res.status(200).send({ db: wetherforcast })
    })
})
router.post("/", async (req, res) => {
    const wetherforcast = await Wetherforcast.create(req.body);
    redis.set(`wether_forcasts.${req.params._id}`, JSON.stringify(wetherforcast))
    const wetherforcasts = await Wetherforcast.find().lean().exec();
    redis.set("wether_forcasts", JSON.stringify(wetherforcasts))
    return res.status(200).send({ wetherforcast })
})

router.get("/:id", (req, res) => {
    redis.get(`wether_forcasts.${req.params.id}`, async (err, forcasts) => {
        if (err) console.log(err);
        if (forcasts) return res.status(200).send({ redis: JSON.parse(forcasts) });

        const wetherforcast = await Wetherforcast.findById(req.params.id).lean().exec();
        redis.set(`wether_forcasts.${req.params.id}`, JSON.stringify(wetherforcast))
        return res.status(200).send({ db: wetherforcast })
    })
})
router.patch("/:id", async (req, res) => {
    const wetherforcast = await Wetherforcast.findOneAndUpdate(req.params.id, req.body, { new: true }).lean().exec();
    redis.set(`wether_forcasts.${req.params.id}`, JSON.stringify(wetherforcast))
    const wetherforcasts = await Wetherforcast.find().lean().exec();
    redis.set("wether_forcasts", JSON.stringify(wetherforcasts))
    return res.status(201).send({ db: wetherforcast })
})
router.delete("/:id", async (req, res) => {
    const wetherforcast = await Wetherforcast.findOneAndDelete(req.params.id).lean().exec();
    redis.del(`wether_forcasts.${req.params.id}`, JSON.stringify(wetherforcast))
    const wetherforcasts = await Wetherforcast.find().lean().exec();
    redis.set("wether_forcasts", JSON.stringify(wetherforcasts))
    return res.status(201).send({ db: wetherforcast })
})
module.exports = router;