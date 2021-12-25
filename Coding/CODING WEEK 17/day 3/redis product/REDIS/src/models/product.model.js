const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    price: {type: Number, required: true},
   guarantee: {type: Boolean, required: true},
    offer: {type: Boolean, required: true},
},{
    versionKey:false,
    timestamps:true
})

module.exports = mongoose.model("product", productSchema); // products