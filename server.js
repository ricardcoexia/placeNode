var http = require('http');
var path = require('path');
var fs = require('fs');

http.createServer(function (request, response) {
 
 	var img = fs.readFileSync('./cat.jpg');

	response.writeHead(200, {'Content-Type': 'image/gif' });
    
    response.end(img, 'binary');
    
    response.end();
      
}).listen(8080);