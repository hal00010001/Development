var express = require("express")
var app = express()

app.get("/", function(req, res){
    res.send('Olá Mundo!')
})

app.listen(8080, function(){
    console.log("Executando")
})