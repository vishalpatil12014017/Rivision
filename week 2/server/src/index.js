const express=require("express");
const {SIGNUP,SIGNIN}=require(("./controllers/auth.controller"));
const lectuescontroller=require(("./controllers/lectues.controller"))
const studentcontroller=require(("./controllers/student.controller"))
const usercontroller=require(("./controllers/user.controller"))
const app=express();
app.use(express.json());
app.post("/SIGNUP",SIGNUP);
app.post("/SIGNIN",SIGNIN);
app.use("/contest",lectuescontroller);
app.use("/user",usercontroller);
app.use("/students",studentcontroller);
module.exports=app;