const express= require("express");
const app= express();
var bookData=require("./data.json");
app.use(express.json());
//get req
app.get("/",logger,function(req,res){
    // req.name.books=bookData
    //we can write like
    req.name["books"]=bookData;
    res.send(req.name)
})
//post req
app.post("/books",logger,function(req,res){
     bookData.push(req.body);
      req.name.books=bookData
    //we can write like
    // req.name["books"]=bookData;
    res.send(req.name)
})
//get req by id
app.get("/books/:id",logger,function(req,res){
    bookData.forEach((element)=>{
         if(element.id==req.params.id){   // here we can write like element["id"] and we take req.params because all elements are presents in params
             req.name.book=element;
             res.send(req.name)
         };
    });
})

//patch req by id
app.patch("/books/:id",logger,function(req,res){
    bookData.forEach((element)=>{
         if(element.id==req.params.id){
            element.auther=req.body.auther;
            element.published_year=req.body.published_year;
            req.name.book=bookData;
            res.send(req.name)
         };
    });
})
//put req by id
app.put("/books/:id",logger,function(req,res){
    bookData.forEach((element)=>{
         if(element.id==req.params.id){
            element.auther=req.body.auther;
            element.published_year=req.body.published_year;
            req.name.book=bookData;
            res.send(req.name)
         };
    });
})

//delete req by id
app.delete("/books/:id",logger,function(req,res){
    bookData.forEach((element)=>{
         if(element.id==req.params.id){
             var num=Number(req.params.id)-1;
             bookData.splice(num,1)
            req.name.book=bookData;
            res.send(req.name)
         };
    });
})

function logger(req,res,next){
    req.name={"api_requested_by":"Vishal Patil"};
    next();
}
app.listen(1000,function(){
    console.log("listning on port 1000")
})
//we can do app.listen(1000)