const mongoose=require("mongoose");
const albumSchema=new mongoose.Schema({
    name:{type:String,required:true},
    genere:{type:String,required:true,default:true},
    year:{type:Number,required:true},
    songs:[{type:mongoose.Schema.Types.ObjectId,required:true,ref:"song"}]
},
{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("album",albumSchema);