var http = require('http'),
    onRequest = function(request, response){
        console.log('Uma requisição chegou!')

        //response.writeHead(200, {'Content-Type': 'text/plan'}) Para mandar texto pela web
        //response.write('Alô Mundo Node.js!')
       
        response.writeHead(200, {'Content-Type': 'text/html'}) // Para mandar web
        var resp = '<meta charset="utf-8" />'
        //response.write('<h1>Alô Mundo Node.js!<h1>') Manda sem o utf-8, para isso deve-se adicionar o resp
        resp += '<h1>Alô Mundo Node.js!<h1>'
        response.write(resp)
        response.end()
    }

http.createServer(onRequest).listen(3000)
console.log('Servidor Node.js inicializado com sucesso!')