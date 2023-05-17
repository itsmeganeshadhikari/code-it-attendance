const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser"); //Import section
const env = require("dotenv").config();

//Init section
const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => res.send("Home page"));

module.exports = app;
