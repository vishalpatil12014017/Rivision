const express = require("express");

const userController = require("./controllers/book.controller");

const app = express();

app.use(express.json());

app.use("/books", userController);

module.exports = app;