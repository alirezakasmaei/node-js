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

    socket.emit('newEmail', {
        from: 'alikasmaei@gmail.com',
        text:'what the fuck?'
    });
    socket.on('createEmail', (newEmail) => {
        console.log('create Email',newEmail)
    })

    socket.emit('newMessage', {
        from: 'a',
        text: 't',
        createdAt:'cr'
    })
    socket.on('createMessage', (newMessage) => {
        console.log('create Message',newMessage)
    })

    socket.on('disconnect', () => {
        console.log('User disconnected!');
    })
})

server.listen((3000), () => {
    console.log('started on port 3000');
})
