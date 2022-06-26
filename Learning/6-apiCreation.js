const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');

require('dotenv').config()
console.log(process.env)


const app =- express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));


mongoose.connect(process.env.MongoUrl + );




/*
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
*/



const articleSchema = {
  title : String,
  content: String
};


const Article = moongose.model("Article",articleSchema);

