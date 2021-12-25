const mongoose = require("mongoose");

//creating schema for comment
const commentSchema = new mongoose.Schema({
    body: { type: String, required: true },
    post: { type: mongoose.Schema.Types.ObjectId, ref: "post", required: true },
},
    {
        versionKey: false,  //____v____removes underlines
        timestamps: true,  //shows create date and update date
    })

//connect commentSchema to comment collection
const Comment = mongoose.model("comment", commentSchema);
module.exports=Comment