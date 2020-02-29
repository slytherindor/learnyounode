const mymodule = require('./mymodule');
const dirName = process.argv[2]
const extension = process.argv[3];

mymodule(dirName, extension, function (err, data) {
    if (err) {
        console.log(err);
    }

    for (file of data) {
        console.log(file);
    }
})