const mongoose=require("mongoose");
const artistSchema=new mongoose.Schema({
    name:{type:String,required:false},
    email:{type:String,required:true,unique:"true"},
    password:{type:String,required:true,unique:"true"},
    albums:[{type:mongoose.Schema.Types.ObjectId,required:false,ref:"album"}],
    url:{type: String, required: false }
},
{
    versionKey:false,
    timestamps:true
})

const Artist = mongoose.model("artist", artistSchema); // Artists

module.exports = Artist;