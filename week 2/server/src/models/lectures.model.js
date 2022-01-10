const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
    batch: { type: String, required: true },
    instructor: { type: String ,required:true },
    time:{ type: String, required: true },
    date:{ type: String, required: true },
    title: { type: String, required: true },
    type:{ type: String, required: true }
}, {
    versionKey: false,
    timestamps: true
})

const Instructor = mongoose.model("instructor", instructorSchema);
module.exports = Instructor