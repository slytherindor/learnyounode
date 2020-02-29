'use strict'
const net = require('net');
const port = process.argv[2]

function zeroFill (i) {
    return (i < 10 ? '0' : '') + i
  }

const server = net.createServer(function (socket) {
    const d = new Date();
    const year = zeroFill(d.getFullYear());
    const month = zeroFill(d.getMonth() + 1);
    const date = zeroFill(d.getDate());
    const hours = zeroFill(d.getHours());
    const mins = zeroFill(d.getMinutes());
    socket.write(`${year}-${month}-${date} ${hours}:${mins}\n`);
    socket.end();

});

server.listen(port);