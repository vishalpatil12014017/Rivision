const express = require("express");
const connect=require("./config/db")

// const User=require("./models/user_model")
// const Post=require("./models/post_model")
// const Tag=require("./models/tag_model")
// const Comment=require("./models/comment_model")

//here we are using models inside controllers thats why here no need of modules


const usercontroller=require("./controllers/user_controllers")
const postcontroller=require("./controllers/post_controllers")
const commentcontroller=require("./controllers/comment_controllers")
const tagcontroller=require("./controllers/tag_controllers")

const app = express();
app.use(express.json())

app.use("/user",usercontroller)
app.use("/post",postcontroller);
app.use("/comment",commentcontroller);
app.use("/tag",tagcontroller);


//_____________________________________________________________________________________________



app.listen(1234, async function () {
    await connect();
    console.log("listning on port 1234")
})