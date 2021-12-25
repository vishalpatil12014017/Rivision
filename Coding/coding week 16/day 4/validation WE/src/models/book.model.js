const mongoose = require('mongoose');
// user model
const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    price:{ type: Number, required: true },
   pages: { type: Number, required: true },
   edition:{ type: Number, required: true },
//    author:{ type: mongoose.Schema.Types.ObjectId,ref:"user", required: true }
},
{
    versionKey: false,  //____v____removes underlines
    timestamps: true,  //shows create date and update date
})

module.exports = mongoose.model("book", bookSchema)
