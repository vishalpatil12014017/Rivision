
const mongoose = require('mongoose');
// user model
const topicSchema = new mongoose.Schema({
    title: { type: String, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
},
{
    versionKey: false,  //____v____removes underlines
    timestamps: true,  //shows create date and update date
})

module.exports = mongoose.model("topic", topicSchema)
