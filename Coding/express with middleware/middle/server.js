const express= require("express");
const app= express();
var users=require("./data.json")
// app.use(logger)  we can do with passing function inside the post request
app.get("/",function(req,res){
    res.send("hello from express kya bhidu")
})
app.get("/users",function(req,res){
    res.send(users)
})


app.post("/users",logger,function(req,res){
    // console.log("name:",req.name)
    console.log("done new fi");
    res.send(users)
})

function logger(req,res,next){
    // req.name="Vishal Patil"
    // console.log("before logger");
    // next();
    // console.log("after logger")

    if((req.query.name==="Vishal")){
        next()
    }else{
        console.log("i love myself")
    }
}
app.listen(3535,function(){
    console.log("listning on port 3535")
})