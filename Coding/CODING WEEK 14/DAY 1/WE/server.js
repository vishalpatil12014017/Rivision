const express = require("express");
const mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/we_sessions")
}

// creating schema for mongoose
const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    size: { type: String, required: false },
})

//connect ProductSchema to user collection
const User = mongoose.model("user", ProductSchema);

const app = express();
app.use(express.json())

//____________________CRUD APIS FOR USER___________________//
//POST creat user
app.post("/product", async (req, res) => {
    const Products = await User.create(req.body)  // it is like db.user
    return res.status(201).send({Products});
})

// get req all users
app.get("/product", async (req, res) => {
    // const Products = await User.find().lean().exec()  // it is like db.user
    const Products = await User.find().sort({name:1}).lean().exec()  // it is like db.user.sort()
    return res.status(200).send({Products});
})

// update the product ===patch
app.patch("/product/:_id", async (req, res) => {
    const Products = await User.findByIdAndUpdate(req.params._id,req.body,{new:true}).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({Products});
})

// delete the product 
app.delete("/product/:_id", async (req, res) => { 
    const Products = await User.findByIdAndDelete(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({Products});
})

// find user by id
app.get("/product/:_id", async (req, res) => {
    const Products = await User.findById(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({Products});
})



app.listen(1234, async function () {
    await connect();
    console.log("listning on port 1234")
})