const app= require("./index");
const connect=require("./config/db");
const cors = require('cors');
app.use(cors({origin:'http://localhost:3000/register'}))
app.listen(3535,async function () {
    await connect();
    console.log("listening on port 3535")
    
})