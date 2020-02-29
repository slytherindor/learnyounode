'use strict'
let sum = 0;
for (arg of process.argv.slice(2)) {
    if (Number(arg)) {
        sum += Number(arg)
    }
}
console.log(sum)