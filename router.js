const http = require('http');

const express = require('express');

const app = express()
const bodyParser = require('body-parser');

const routeUsers = require('./users')
app.use(bodyParser.json({extended: true}));

app.use(routeUsers)

const server = http.createServer(app)

server.listen(4000);