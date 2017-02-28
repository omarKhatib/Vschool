var http = require('http');
var fs = require('fs'); //file system
var path = './';
var server = http.createServer(function(request, response){
    console.log('I have hit the server');
    
    fs.readFile(path, 'binary', function(err, file){
        if(err){
            response.writeHeader(500, {'Content-Type':'text/html'});
            response.write(err);
            response.end();
            
            
        }
        
        else{
            response.writeHeader(200, {'Content-Type':'text/html'});
            response.write(file,'binary');
            response.end();
            
        }
        
    });

});

server.listen(8080);
console.log('the server is running');