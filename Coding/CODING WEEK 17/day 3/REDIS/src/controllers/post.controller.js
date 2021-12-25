const express = require('express');

const router = express.Router();

const Post = require("../models/post.model")
const redis = require("../configs/redis")


router.post("/", async (req, res) => {
    const post = await Post.create(req.body);
 
    return res.status(201).send({ post })
})
router.post("/:id/likes", (req, res) => {
    redis.get(`post.${req.params.id}.likes`, function (err, likes) {
        if (err) console.log(err);
        if (!likes) {
            redis.set(`post.${req.params.id}.likes`, 1)
            return res.status(200).send({ like:1 })
        }else{
            const updated_likes=JSON.parse(likes)+1
            redis.set(`post.${req.params.id}.likes`, updated_likes)
            return res.status(200).send({ likes:updated_likes })
        }
    })
})
router.post("/:id/Dislikes", (req, res) => {
    redis.get(`post.${req.params.id}.Dislikes`, function (err, Dislikes) {
        if (err) console.log(err);
        if (!Dislikes) {
            redis.set(`post.${req.params.id}.Dislikes`, 1)
            return res.status(200).send({ Dislike:1 })
        }else{
            const updated_Dislikes=JSON.parse(Dislikes)+1
            redis.set(`post.${req.params.id}.Dislikes`, updated_Dislikes)
            return res.status(200).send({ Dislikes:updated_Dislikes })
        }
    })
})

module.exports = router;