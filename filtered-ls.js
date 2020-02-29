'use strict'

const fs = require('fs');
const extension = process.argv[3];
fs.readdir(process.argv[2], function listdir(err, data) {
    if (err) {
        console.log(err);
    }

    data.map((value) => {
        if(value.split('.').length > 1 && value.split('.').slice(-1)[0] === extension) {
            console.log(value);
        }
    });
})