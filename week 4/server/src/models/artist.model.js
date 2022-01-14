const mongoose=require("mongoose");
const artistSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:"true"},
    password:{type:String,required:true,unique:"true"},
    albums:{type:mongoose.Schema.Types.ObjectId,required:true,ref:"album"},
},
{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("artist",artistSchema);