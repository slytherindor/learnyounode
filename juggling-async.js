'use strict'

const http = require('http');
const bl = require('bl');
const urls = process.argv.slice(2, 5);
const responses = [];
let count = 0;

urls.forEach((url, index) => {
    http.get(url, function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                return console.error(err);
            }
            responses[index] = data.toString();
            count ++
            if (count === 3 ) {
                responses.forEach(res => {
                    console.log(res);
                });
            }
        }));
        
    });
});