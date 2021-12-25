const mongoose = require("mongoose");
//creating schema for post
const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    body: { type: String, required: true },
    auther: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
    tags: { type: mongoose.Schema.Types.ObjectId, ref: "tag", required: true },
},
    {
        versionKey: false,  //____v____removes underlines
        timestamps: true,  //shows create date and update date
    })

//connect postSchema to post collection
const Post = mongoose.model("post", postSchema);
module.exports = Post