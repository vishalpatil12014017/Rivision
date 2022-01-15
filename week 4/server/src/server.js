const express = require("express");
const connect = require("./config/db");
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }))
const songcontroller = require("./controllers/song.controller");
const albumcontroller = require("./controllers/albun.controller")
const artistcontroller = require("./controllers/artist.controller");
app.use("/songs", songcontroller);
app.use("/albums", albumcontroller);
app.use("/artists", artistcontroller);


//let refreshTokens = [];
app.listen(3535, async function () {
    await connect();
    console.log("listening on port 3535")
})