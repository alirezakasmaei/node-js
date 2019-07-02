var express = require('express');
var bodyparser = require('body-parser');

var { mongoose,ObjectID } = require('./db/mongoose.js');
var { todos } = require('./models/todos');
var { users } = require('./models/users');

var app = express();

app.use(bodyparser.json());

app.post('/todos', (req, res) => {      //post data and save in db
    console.log(req.body);
    var todo = new todos({                         //create a document
        text: req.body.text,
        knowledge:req.body.knowledge
    })
    todo.save().then((todo) => {
        res.send({todo});
    }, (err) => {
        res.status(400).send(err);
    })
});

app.get('/todos', (req,res) => {            //get from db and show it
    todos.find().then((todo) => {
        res.send({todo});
    }, (err) => {
        res.status(400).send(err);
    })
});

app.get('/todos/:id', (req, res) => {       //reqiust id and get document
    var id = req.params.id;
    if (!ObjectID.isValid(id))              //test validation of id
        return res.status(404).send('404 Not Found');
    todos.findById(id).then((doc) => {
        if (!doc)                           //document not found
            res.status(400);
        res.send({ doc });
    }).catch((err) => {
        res.status(400);
    });
});


app.delete('/todos/:id', (req, res) => {           //reqiust id and delete  the document
    var id = req.params.id;
    if (!ObjectID.isValid(id))
        return res.status(404);
    todos.findByIdAndDelete(id).then((result) => {
        if (!result)
            return res.status(400);
        res.send(result);
    }).catch((err) => {
        return res.status(400);
    })
})


app.listen((3000), () => {
    console.log('started on port 30000')
})