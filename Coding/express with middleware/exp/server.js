const express= require("express");
const app= express();
var users=require("./data.json")
app.use(logger)
app.get("/",function(req,res){
    res.send("hello from express kya bhidu")
})

app.get("/users",function(req,res){
    res.send(users)
})
function logger(req,res,next){
    console.log("after logger");
    next();
}
app.listen(3535,function(){
    console.log("listning on port 3535")
})