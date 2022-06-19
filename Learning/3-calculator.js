const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/3-calculator.html");
});

app.post("/", function (req, res) {
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);

    var result = num1+num2;
    res.send( "the result is : " + result);
});

app.listen(3000, function () {
  console.log("Server is Up and Running on 3000");
});
