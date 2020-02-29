'use strict'
const http = require('http');
const map = require('through2-map')

var upcase = function (chunk) {
    return chunk.toString().toUpperCase();
}
const server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        req.pipe(map(upcase)).pipe(res);
    }
});
server.listen(process.argv[2]);