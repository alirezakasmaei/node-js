const path = require('path');
var publicpath = path.join(__dirname , '../public');

const express = require('express');
const app = express();

console.log(__dirname + '/../public');
console.log(publicpath);

app.use(express.static(publicpath));

app.listen((3000), () => {
    console.log('started on port 3000');
})
