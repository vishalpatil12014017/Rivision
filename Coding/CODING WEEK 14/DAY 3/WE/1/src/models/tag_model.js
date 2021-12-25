const mongoose = require("mongoose");
//creating schema for tag
const tagSchema = new mongoose.Schema({
    name: { type: String, required: true },
},
    {
        versionKey: false,  //____v____removes underlines
        timestamps: true,  //shows create date and update date
    })

//connect tagSchema to tag collection
const Tag = mongoose.model("tag", tagSchema);
module.exports=Tag