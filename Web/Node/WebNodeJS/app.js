var http = require("http");

http.createServer(function(request, response){
    response.write("Ola Mundo!");
    response.end();
}).listen(8081);

console.log("Servidor rodando em http://localhost:8081");