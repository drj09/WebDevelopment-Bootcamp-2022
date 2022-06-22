const express = require('express');
const app = express();



app.get("/",function(req,res){


var today = new Date();
if(today.getDay() == 6 || today.getDay() == 0)
res.send("<h1>HEHE its weekend</h1>");
else
res.send("<h1>Work Day It is </h1>");

});



app.listen(3000,function(){
    console.log('server is up to run on port 3000');
})

