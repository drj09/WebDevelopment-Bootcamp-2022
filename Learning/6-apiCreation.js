const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require('mongoose');

require('dotenv').config();



const app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static("public"));


mongoose.connect(process.env.MongoUrl);




const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to Mongo Atlas successfully");
});



const articleSchema = {
  title : String,
  content: String
};


const Article = mongoose.model("Article",articleSchema);

app.get("/articles",function(res,res){
    console.log('Got get request on /articles api');
    Article.find(function(err,serverResp){
      if(!err) 
        res.send(serverResp);
      else
        res.send(err);
    })

})


app.post("/articles",function(req,res){

  console.log(req.body.title);



})

app.listen(3000,function(){console.log('Server started on port 3000')});

