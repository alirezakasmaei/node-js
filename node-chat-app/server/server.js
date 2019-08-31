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

    // socket.emit('newMessage', {
    //     from: 'server',
    //     text: 'hello client',
    //     createdAt:'123'
    // })

    socket.emit('newMessage', 'welcome to chat app :)');    //welcome every new client

    socket.broadcast.emit('newMessage', {                   //announce other connection about new user
        from: 'admin',
        text: 'new user joined.'
    });

    socket.on('createMessage', (Message) => {       //get createMessage from a connection
        console.log('create Message', Message);

        // io.emit('newMessage', {                  //send to every single connection
        //     from: Message.from,
        //     text: Message.text,
        //     createdAt: new Date().getTime()
        // });

        socket.broadcast.emit('newMessage', {       //send to "other" connections
            from: Message.from,
            text: Message.text,
            createdAt:new Date().getTime()
        })
    })

    socket.on('disconnect', () => {
        console.log('User disconnected!');
    })
})

server.listen((3000), () => {
    console.log('started on port 3000');
})
