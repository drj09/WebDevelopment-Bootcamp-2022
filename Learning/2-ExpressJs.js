const express = require("express");
const app = express();

app.get("/", function (request, response) {
  console.log("got new request on homePage");
  response.send("<h1>Home Page2</h1>");
});

app.get("/contact", function (request, response) {
  console.log("got new on contactPage");
  response.send("<h1>Contact Page</h1>");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
