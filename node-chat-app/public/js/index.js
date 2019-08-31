var socket = io(); 

socket.on('connect', function () {
    console.log('Connected to the server');

    socket.emit('createEmail', {
        to:'rezakasm@gmailcom'
    })

    socket.emit('createMessage', {
        to: 'client to server',
        text:'hahaha..'
    })
})

socket.on('disconnect', function () {
    console.log('Disconnected from server');
})

socket.on('newEmail', function (email) {
    console.log('new Email',email);
})

socket.on('newMessage', function (message) {
    console.log('newMessage',message)
})