const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
})

module.exports = mongoose.model("product", productSchema); // products