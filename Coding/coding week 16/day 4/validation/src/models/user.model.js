const mongoose = require('mongoose');
// user model
const userSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    gender: { type: String, required: true},
    pincode:{ type: Number, required: true },
    age:{ type: Number, required: true }
},
{
    versionKey: false,  //____v____removes underlines
    timestamps: true,  //shows create date and update date
})

module.exports = mongoose.model("user", userSchema)
