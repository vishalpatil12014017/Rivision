const express = require("express");
const mongoose = require("mongoose");
const connect = () => {
    return mongoose.connect("mongodb://127.0.0.1:27017/assignment")
}

// creating schema for mongoose
const MovieSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    movie_name: { type: String  , required: true },
    movie_genere: { type: String  , required: true },
    production_year:{ type: Number, required: true },
    budget: { type: Number, required: true },
})

//connect MovieSchema to user collection
const User = mongoose.model("movie", MovieSchema);

const app = express();
app.use(express.json())

//____________________CRUD APIS FOR USER___________________//
//POST creat user
app.post("/movie", async (req, res) => {
    const Movies = await User.create(req.body)  // it is like db.user
    return res.status(201).send({Movies});
})

// get req all users
app.get("/movie", async (req, res) => {
    // const Movies = await User.find().lean().exec()  // it is like db.user
    const Movies = await User.find().sort({id:1}).lean().exec()  // it is like db.user.sort()
    return res.status(200).send({Movies});
})

// update the product ===patch
app.patch("/movie/:_id", async (req, res) => {
    const Movies = await User.findByIdAndUpdate(req.params._id,req.body,{new:true}).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({Movies});
})

// delete the product 
app.delete("/movie/:_id", async (req, res) => { 
    const Movies = await User.findByIdAndDelete(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({Movies});
})

// find user by id
app.get("/movie/:_id", async (req, res) => {
    const Movies = await User.findById(req.params._id).lean().exec()  // here new:true provide res else it is not show on postman
    return res.status(200).send({Movies});
})

app.listen(4321, async function () {
    await connect();
    console.log("listning on port 4321")
})