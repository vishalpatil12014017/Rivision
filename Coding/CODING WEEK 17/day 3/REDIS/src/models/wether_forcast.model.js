const mongoose = require('mongoose');

const wetherSchema = new mongoose.Schema({
    city: {type: String, required: true},
    max_temp: {type: Number, required: true},
    min_temp: {type: Number, required: true},
    humidity: {type: Number, required: true},
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("wether", wetherSchema); // products