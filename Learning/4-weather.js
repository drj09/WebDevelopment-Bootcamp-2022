const { json } = require("body-parser");
const { response } = require("express");
const express = require("express");
const app = express();
const https = require('https');

app.get("/",function(req,res) {

    https.get('https://jsonplaceholder.typicode.com/todos/1',function(response) {
        console.log(response.statusCode);
    })

    res.on('data', (d) => {
        process.stdout.write(d);
      });


    res.send("server is up ")
})




app.listen(3000,function(){
    console.log('server is up on port 3000');
} )