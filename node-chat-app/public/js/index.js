var socket = io(); 

socket.on('connect', function () {
    console.log('Connected to the server');

    // socket.emit('createMessage', {
    //     to: 'server',
    //     text:'hi server!!!!'
    // })
})

socket.on('newMessage', function (message) {        //get newMessage from server and show in console
    console.log('new Message : ', message)
})

socket.on('disconnect', function () {
    console.log('Disconnected from server');
})