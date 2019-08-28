const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');


var data = {
    id: 4,
    name:'alireza'
};
var token = jwt.sign(data, '123ed');
var decoded = jwt.verify(token, '123ed');
console.log(token);
console.log('decoded', decoded);

// var message = 'I am alireza';
// var hash = SHA256(message).toString();

// console.log(`message: ${message}`);
// console.log(`hash: ${hash}`);

// var data = { id: 4 };
// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// token.data.id = 20;
// token.hash = SHA256(JSON.stringify(token.data)).toString()


// var resulthash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()
// if (resulthash === token.hash)
//     console.log('Has not changed');
// else
//     console.log('Has changed')