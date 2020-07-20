var express = require("express")
var app = express()

app.use(express.static("public"))

var path = require('path')

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/page/index.html')
})

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/public/page/sobre.html')
})

app.get('/contato', function(req, res){
    res.sendFile(__dirname + '/public/page/contato.html')
})

app.listen(8080, function(){
    console.log('Executando')
})