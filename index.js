var OSinfo = require('./modules/OSinfo');
var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    if (request.method === 'GET' && request.url === '/') {
        fs.readFile('./index.html', 'utf-8', (err, data) => {
            if (err) throw err;
            response.write(data);
            response.end();
        });

    } else {
        response.setHeader('Content-Type', 'image/png');
        fs.readFile('./cat.jpg', (err, data) => {
            if (err) throw err;
            response.statusCode = 404;
            response.write(data);
            response.end();
        })
    }
});

server.listen(8080);