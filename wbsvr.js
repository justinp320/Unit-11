// Justin Perras CS81 Unit 11 Assignment
var http = require("http");
var server = http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.writeHead(200, {'Content-Type': 'text/html'});
	response.write('Hello World, my name is Justin Perras'); 
	response.end();
	}).listen(8081);