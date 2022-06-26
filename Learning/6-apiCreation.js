const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MongoUrl);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected to Mongo Atlas successfully");
});

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

// Request REST API Targeting all data
app
  .route("/articles")
  .get(function (res, res) {
    console.log("Got get request on /articles api");
    Article.find(function (err, serverResp) {
      if (!err) res.send(serverResp);
      else res.send(err);
    });
  })
  .post(function (req, res) {
    console.log("Got POST request on /articles");

    newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    newArticle.save(function (err) {
      console.log(err);
      if (!err) res.send("Successfully added a new article");
      else res.send(err);
    });
  })
  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (!err) res.send("Successfully deleted all articles.");
      else res.send(err);
    });
  });


// Request REST API Targeting specific data
app.route("/articles/:articleTitle")

.get(function(req, res){

  Article.findOne({title: req.params.articleTitle}, function(err, foundArticle){
    if (foundArticle) {
      res.send(foundArticle);
    } else {
      res.send("No articles matching that title was found.");
    }
  });
})

.put(function(req, res){

  Article.update(
    {title: req.params.articleTitle},
    {title: req.body.title, content: req.body.content},
    {overwrite: true},
    function(err){
      if(!err){
        res.send("Successfully updated the selected article.");
      }
    }
  );
})

.patch(function(req, res){

  Article.update(
    {title: req.params.articleTitle},
    {$set: req.body},
    function(err){
      if(!err){
        res.send("Successfully updated article.");
      } else {
        res.send(err);
      }
    }
  );
})

.delete(function(req, res){

  Article.deleteOne(
    {title: req.params.articleTitle},
    function(err){
      if (!err){
        res.send("Successfully deleted the corresponding article.");
      } else {
        res.send(err);
      }
    }
  );
});


app.listen(3000, function () {
  console.log("Server started on port 3000");
});
