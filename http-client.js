'use strict'
const http = require('http');

const url = process.argv[2]
http.get(url, function callback(response) {
    response.on('data', function (data) {
        response.setEncoding('utf8');
        console.log(data.toString());

    })
    response.on('error', console.error)
}).on('error'. console.error);