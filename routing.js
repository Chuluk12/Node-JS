// ini manggil module htpp, di tampung di variabel konstanta http
const http = require('http');
const fs = require('fs');

// panggil method createServer, ada req dan res
const server = http.createServer((req, res) => {

    // kita ambil request, url
    const url = req.url; // /message
    const method = res.method;
        if(url === '/'){
            res.write('<html>');
            res.write('<head><title>Enter Message</title></head>');
            res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
            res.write('</html>');
            return res.end();
        }

        if (url === '/message' && method === 'POST'){
            fs.writeFile('message.txt', 'DUMMY');
            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        }

        // yang jalan selain url '/'
        res.end("Hi, selamat datang di sekolah Fullstack")
});

// server listen, artinya adalah si server jalanin di port 3000
server.listen(3008);

console.log("server running on http://localhost:3008")