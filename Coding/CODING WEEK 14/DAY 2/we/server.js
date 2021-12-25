const express = require("express");
const mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/facebook")
}

// creating schema for mongoose
const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true },
    gender: { type: String, required: true },
})

//connect userSchema to user collection
const User = mongoose.model("user", userSchema);

const app = express();
app.use(express.json())

//____________________CRUD APIS FOR USER___________________//
//POST creat user
app.post("/user", async (req, res) => {
    const users = await User.create(req.body)  // it is like db.user
    return res.status(201).send({ users });
})

// get req all users
app.get("/user", async (req, res) => {
    // const users = await User.find().lean().exec()  // it is like db.user
    const users = await User.find().sort({ name: 1 }).lean().exec()  // it is like db.user.sort()
    return res.status(200).send({ users });
})


// update the user ===patch
app.patch("/user/:_id", async (req, res) => {
    const users = await User.findByIdAndUpdate(req.params._id, req.body, { new: true }).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ users });
})

// delete the user 
app.delete("/user/:_id", async (req, res) => {
    const users = await User.findByIdAndDelete(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ users });
})

// find user by id
app.get("/user/:_id", async (req, res) => {
    const users = await User.findById(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ users });
})


//_______________________________________________________________________________
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


//____________________CRUD APIS FOR post___________________//
//POST creat post
app.post("/post", async (req, res) => {
    const posts = await Post.create(req.body)  // it is like db.post
    return res.status(201).send({ posts });
})

// // get req all posts
// app.get("/post", async (req, res) => {
//     // const posts = await Post.find().lean().exec()  // it is like db.post
//     const posts = await Post.find().sort({ name: 1 }).lean().exec()  // it is like db.post.sort()
//     return res.status(200).send({ posts });
// })
// get req all posts
app.get("/post", async (req, res) => {
    // const posts = await Post.find().lean().exec()  // it is like db.post
    // const posts = await Post.find().populate("auther").populate("tags").lean().exec()  // it will show all information about user
    const posts = await Post.find().populate({
        path:"auther",
        select:"first_name"
    }).populate("tags").lean().exec() 
    return res.status(200).send({ posts });
})

//it will find all post by perticular id
app.get("/user/:id/post", async (req, res) => {
    // const posts = await Post.find({auther:req.params.id}).populate({
    //     path:"auther",
    //     select:"first_name"
    // }).populate("tags").lean().exec() 
    const posts = await Post.find({auther:req.params.id}).lean().exec() ;
    const auther = await User.findById(req.params.id).lean().exec() 
    return res.status(200).send({ posts,auther });
})

// update the post ===patch
app.patch("/post/:_id", async (req, res) => {
    const posts = await Post.findByIdAndUpdate(req.params._id, req.body, { new: true }).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ posts });
})

// delete the post 
app.delete("/post/:_id", async (req, res) => {
    const posts = await Post.findByIdAndDelete(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ posts });
})

// find post by id
app.get("/post/:_id", async (req, res) => {
    const posts = await Post.findById(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ posts });
})

//___________________________________________________________________________

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


//____________________CRUD APIS FOR comment___________________//
//POST creat comment
app.post("/comment", async (req, res) => {
    const comments = await Comment.create(req.body)  // it is like db.comment
    return res.status(201).send({ comments });
})

// get req all comments
app.get("/comment", async (req, res) => {
    // const comments = await Comment.find().lean().exec()  // it is like db.comment
    const comments = await Comment.find().sort({ name: 1 }).lean().exec()  // it is like db.comment.sort()
    return res.status(200).send({ comments });
})

// update the comment ===patch
app.patch("/comment/:_id", async (req, res) => {
    const comments = await Comment.findByIdAndUpdate(req.params._id, req.body, { new: true }).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ comments });
})

// delete the comment 
app.delete("/comment/:_id", async (req, res) => {
    const comments = await Comment.findByIdAndDelete(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ comments });
})

// find comment by id
app.get("/comment/:_id", async (req, res) => {
    const comments = await Comment.findById(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ comments });
})

//______________________________________________________________________________________

//creating schema for tag
const tagSchema = new mongoose.Schema({
    name: { type: String, required: true },
},
    {
        versionKey: false,  //____v____removes underlines
        timestamps: true,  //shows create date and update date
    })

//connect tagSchema to tag collection
const Tag = mongoose.model("tag", tagSchema);

//____________________CRUD APIS FOR tag___________________//
//POST creat tag
app.post("/tag", async (req, res) => {
    const tags = await Tag.create(req.body)  // it is like db.tag
    return res.status(201).send({ tags });
})

// get req all tags
app.get("/tag", async (req, res) => {
    // const tags = await Tag.find().lean().exec()  // it is like db.tag
    const tags = await Tag.find().sort({ name: 1 }).lean().exec()  // it is like db.tag.sort()
    return res.status(200).send({ tags });
})

// update the tag ===patch
app.patch("/tag/:_id", async (req, res) => {
    const tags = await Tag.findByIdAndUpdate(req.params._id, req.body, { new: true }).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ tags });
})

// delete the tag 
app.delete("/tag/:_id", async (req, res) => {
    const tags = await Tag.findByIdAndDelete(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ tags });
})

// find tag by id
app.get("/tag/:_id", async (req, res) => {
    const tags = await Tag.findById(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({ tags });
})

//_____________________________________________________________________________________________



app.listen(1234, async function () {
    await connect();
    console.log("listning on port 1234")
})