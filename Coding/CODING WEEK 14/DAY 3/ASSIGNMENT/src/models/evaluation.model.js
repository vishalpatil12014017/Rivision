
const mongoose = require('mongoose');
// user model
const evaluationSchema = new mongoose.Schema({
    date_ef_evaluation: { type: String, required: true },
    topicId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "topic" },
},
{
    versionKey: false,  //____v____removes underlines
    timestamps: true,  //shows create date and update date
})

module.exports = mongoose.model("evaluation", evaluationSchema)
