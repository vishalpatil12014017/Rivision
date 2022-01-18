const mongoose=require("mongoose");
const albumSchema=new mongoose.Schema({
    name:{type:String,required:true},
    genere:{type:String,required:true,default:true},
    year:{type:Number,required:true},
    url:{type:String,required:true},
    artistname:{type:String,required:true},
    artistimg:{type:String,required:false},
    songs:[{type:mongoose.Schema.Types.ObjectId,required:true,ref:"song"}]
},
{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("album",albumSchema);