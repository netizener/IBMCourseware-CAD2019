var http = require('http');
var server = http.createServer(function(request, response) {
var body = "Hello world!";
response.writeHead(200, {
'Content-Length': body.length,
'Content-Type': 'text/plain'
});
response.end(body);
});
server.listen(8080); 
