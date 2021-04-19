const http = require('http');
const qs = require('querystring');
const fs = require('fs');

http.createServer(function (req, res) {

            if(req.url === "/" && req.method === "GET"){

                    fs.readFile("form.html", (err, data) => {
                            if (err) { 
                                res.writeHead(404, {'Content-Type': 'text/html'});
                                return res.end("404 Not Found");
                            }
                                res.writeHead(200, {'Content-Type': 'text/html'});
                                res.write(data);
                                return res.end();
                    });
                }

            if(req.url === "/create-user/" && req.method === "POST"){

                let requestBody = '';
                req.on('data', function(data) {
                    
                requestBody += data;
                console.log(requestBody)

                });

                req.on('end', function() {
                const formData = qs.parse(requestBody);
                console.log(formData)
    
                if( formData ) {
                
                res.writeHead(200, {'Content-Type': 'text/html'});
               
                res.write('<h1>'+formData.username+'</h1>');
                
                res.end();
                }
               
                })
            }
}).listen(4000);
console.log('http://localhost:4000')