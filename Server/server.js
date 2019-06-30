var express = require('express');
var bodyparser = require('body-parser');

var { mongoose } = require('./db/mongoose.js');
var { todos } = require('./models/todos');
var { users } = require('./models/users');

var app = express();

app.use(bodyparser.json());


app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new todos({                         //create a document
        text: req.body.text
    })
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    })
});


app.listen((3000), () => {
    console.log('started on port 30000')
})