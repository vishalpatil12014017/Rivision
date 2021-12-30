const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({

    email: { type: String, required: true },
    education: { type: String, required: true },
    name: { type: String, required: true },
    age: { type: Number, required: true },
    mobile: { type: Number, required: true },
    city: { type: String, required: true },
    gender: { type: String, required: true },
    role: { type: String, required: false,default:false }
}, {
    versionKey: false,
    timestamps: true
})
userSchema.pre("save", function (next) {
    if (!this.isModified("passwoed")) return next();
    const hash = bcryptjs.hashSync(this.age, 1);
    this.age = hash;
    return next();
})
userSchema.methods.checkage = function (age) {
    const match = bcryptjs.compareSync(age, this.age);
    return match;

}
const User = mongoose.model("user", userSchema);
module.exports = User