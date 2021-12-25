const connect = require("./config/db");
const app = require("./index");
app.listen(3535, async() =>{
    await connect();
    console.log("listening on port 3535");
})