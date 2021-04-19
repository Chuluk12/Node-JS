const http = require ('http');

const server = http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type' : 'text/html'});
    res.write('selamat<b>datang<b>');
    res.end();
});

server.listen(3009);

console.log('running http://localhost:3009')