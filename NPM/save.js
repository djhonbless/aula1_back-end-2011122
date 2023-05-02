// import express module
const express = require('express');
const app = express();

var server = app.listen(8081, function(){
    app.get('/', function(request, response){
        response.send("Hello Word");
    });
    app.get('/teste', function(request, response){
        response.send("Hello people");
    });
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
})



