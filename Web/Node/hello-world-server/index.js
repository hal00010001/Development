var http = require('http'), fs = require('fs')

http.createServer(function handler(req, res){
    fs.readFile('index.html', function(err, data){
        //res.writeHead(200, {'Content-Type': 'text/plain'})
        res.writeHead(200, {'Content-Type': 'text/html'})
        //res.end('Hello World\n')
        res.end(data)
    })
}).listen(3000, '127.0.0.1')
console.log('Server running at http://127.0.0.1:3000')