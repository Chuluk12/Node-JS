const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/',(req, res, next) =>
{res.sendFile(path.join(__dirname, './','Express' ,'index.html'));
});

router.get('/users',(req, res, next) =>
{res.sendFile(path.join(__dirname, './','Express' ,'users.html'));
});

router.post('/users',(req, res, next) =>{
 console.log(req.body);
 res.redirect('/users')
});

module.exports = router