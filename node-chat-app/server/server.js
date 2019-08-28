const socketIo = require('socket.io');
const http = require('http');
const path = require('path');
const express = require('express');

const app = express();
var server = http.createServer(app);
var io = socketIo(server);
const publicpath = path.join(__dirname, '../public');

console.log(__dirname + '/../public');
console.log(publicpath);

app.use(express.static(publicpath));

io.on('connection', (socket) => {
    console.log('New user connected.');

    socket.on('disconnect', () => {
        console.log('User disconnected!');
    })
})

server.listen((3000), () => {
    console.log('started on port 3000');
})
