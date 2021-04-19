const http = require('http');

http.createServer((req, res) => {

console.log(req.url)


    if(req.url === '/') {
        res.write('<h1> Selamat Berbuka Puasa  <h1>')
        res.end()
    }
    else if (req.url === '/users/') {
        res.write('<html>')
        res.write('<ul> </ul>')
        res.write('<li>User 1</li> <li>User 2</li> <li>User 3</li>')
        res.write('</html>')
        res.end();
    }
})

.listen(4000)

console.log('running http://localhost:4000')