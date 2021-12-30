const mongoose = require("mongoose");

const studentsSchema = new mongoose.Schema({
    roll_number: { type: Number, required: true },
    user : { type: mongoose.Schema.Types.ObjectId, required: true,ref:"user" },
    batch: { type: String, required: true },
},{
    versionKey:false,
    timestamps:true
})

const Students=mongoose.model("students",studentsSchema);
module.exports=Students