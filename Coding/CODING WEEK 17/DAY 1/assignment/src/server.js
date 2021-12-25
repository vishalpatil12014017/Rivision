const app = require("./index")
const connect = require("./config/db")

app.listen(3535, async function () {
    await connect();
    console.log("listening on port 3535");
})