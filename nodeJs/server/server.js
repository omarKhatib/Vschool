var http = require('http');
var server = http.createServer(function(request, response){
    console.log('I have hit the server');
    //console.log but in HTTP
    response.writeHeader(200, {'Content-Type':'text/plain'});
    response.write('hello how are you?');
    response.end();
    
    
});

server.listen(8080);
console.log('the server is running');