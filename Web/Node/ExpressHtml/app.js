var express = require("express")
var app = express()

var path = require('path')

app.get("/", function(req, res){
    res.sendFile(__dirname + '/public/page/index.html')
})

app.listen(8080, function(){
    console.log('Executando')
})