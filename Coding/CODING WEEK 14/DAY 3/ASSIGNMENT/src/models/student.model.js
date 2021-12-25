const mongoose = require('mongoose');
// user model
const studentSchema = new mongoose.Schema({
    rollNo: { type: String, required: true },
    currentBatch: { type: String, required: true },
    marks: { type: Number, required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "user" },
    evaluationId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "evaluation" }
},
{
    versionKey: false,  //____v____removes underlines
    timestamps: true,  //shows create date and update date
})

module.exports = mongoose.model("student", studentSchema)
