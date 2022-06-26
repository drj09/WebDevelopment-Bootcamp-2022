const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");

var item = [];

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
  var today = new Date();
  var day = "";
  if (today.getDay() == 6 || today.getDay() == 0) day = "Weekend";
  else day = "Work Day";
  
  res.render("list", { kindOfDay: day,newListItem : item });

});

app.post("/",function (req,res) {
    item.push(req.body.newItem);
    console.log(item);

    res.redirect("/");
})

app.listen(3000, function () {
  console.log("server is up to run on port 3000");
});
