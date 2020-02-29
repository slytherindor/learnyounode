'use strict'
const http = require('http');
const url = require('url');

function parseTime(time) {
    return JSON.stringify({
        'hour': time.getHours(),
        'minute': time.getMinutes(),
        'second': time.getSeconds()
    });
}

function parseUnixTime(time) {
    return JSON.stringify({
        'unixtime': time.getTime()
    });
}

const server = http.createServer(function(req, res) {
    const reqUrl = url.parse(req.url, true);
    const jsonDate = new Date(reqUrl.query.iso);
    let result;

    if (reqUrl.pathname === '/api/parsetime') {      
        result = parseTime(jsonDate);            
    } else if (reqUrl.pathname === '/api/unixtime') {
        result = parseUnixTime(jsonDate);
    }
    
    if (result) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(result);
    }
    else {
        res.writeHead(404);
        res.end();
    }
});

server.listen(process.argv[2]);