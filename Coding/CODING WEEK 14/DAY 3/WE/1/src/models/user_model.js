const mongoose = require("mongoose");
// creating schema for mongoose
const userSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    email: { type: String, required: true },
    gender: { type: String, required: true },
})

//connect userSchema to user collection
module.exports = mongoose.model("user", userSchema);