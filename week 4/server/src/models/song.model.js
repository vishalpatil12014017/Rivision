const mongoose = require("mongoose");
const songSchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: String, required: true },
    url:{type: String, required: true }
},
    {
        versionKey: false,
        timestamps: true
    })
module.exports = mongoose.model("song", songSchema);