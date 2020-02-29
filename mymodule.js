'use stricT'

const fs = require('fs');
const path = require('path');

function listFilteredFiles(dirName, fileExt, callback) {
    const extensionWithDot = "." + fileExt;
    fs.readdir(dirName, function listFiles(err, data) {
        if (err) {
            return callback(err);
        }
        const list = data.filter((file) => {
            if (path.extname(file) === extensionWithDot) {
                return file;
            }
        });

        callback(null , list);
    });
}

module.exports = listFilteredFiles;