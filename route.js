const http = require('http');

const route = http.createServer((req, res) => {

console.log(req.url)


    if(req.url === '/') {
        res.write('tes')
        re
        res.end()
    }
    else if (req.url === '/product') {
        res.write('daftar')
        res.end();
    }
})

route.listen(3001)

console.log('running http://localhost:3001')