const express = require('express');
const wetherForecastController = require("./controllers/wether_forcast.controller")
const postController = require("./controllers/post.controller")

const app = express();

app.use(express.json());

app.use("/posts", postController)
app.use("/wetherForecasts", wetherForecastController)

module.exports = app;