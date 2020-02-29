'use strict'

const fs = require('fs')
const contents = fs.readFile(process.argv[2], 'utf8', function callback(err, data) {
    if (err) {
        console.log(err);
    }

    console.log(data.split('\n').length - 1);
})