'use strict'
const http = require('http');
const bl = require('bl');

http.get(process.argv[2], function callback(response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log(data.toString().length);
        console.log(data.toString());
    }));
});