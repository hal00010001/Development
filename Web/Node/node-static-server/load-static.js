var static = require('node-static')
var http = require('http')

var fileServer = static.Server('.', {
    cache: 7000,
    headers: {
        'Content-Type': 'text/html'
    }
})

http.createServer(function handler(reques, response){
    fileServer.serve(request, response, function(err, resp){
        if(err){
            console.log('Erro')
        }
    })
}).listen(3000, '127.0.0.1')
console.log('Server running at http://127.0.0.1:3000')