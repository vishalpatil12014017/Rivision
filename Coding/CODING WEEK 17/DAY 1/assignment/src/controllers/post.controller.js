const express = require('express');

const router = express.Router();

const Post = require("../models/post.model")

const authenticate = require('../middlewares/authenticate')

router.get("/new", function(req, res) {
    return res.render("posts/new")
})
router.post("/", async function(req, res) {
    const posts = await Post.create(req.body);
    return res.send({posts:posts})
})

router.get("/", authenticate, async function(req, res) {
    const posts = await Post.find().lean().exec();
    const user = req.user;

     delete user.password  // =>this is used to remove password
    return res.send({posts, user})
})

module.exports = router;