var server = require('http');
var filesystem = require('fs');
function engine(req,  res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    filesystem.readFile('./server.ejs',null,(err, data)=> {
        if(err) {
            res.writeHead(404);
            res.write('File not found');
        } else {
            res.write(data);
        }
        res.end();
    });
    
}

server.createServer(engine).listen(4000);