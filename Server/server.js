var express = require('express');
var bodyparser = require('body-parser');
const _ = require('lodash');

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


app.delete('/todos/:id', (req, res) => {           //reqiust id and delete the document
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


app.patch('/todos/:id', (req, res) => {         //update 'knowledge' of a document
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'knowledge']);         //body = {text:... , knowledge:...}

    if (!ObjectID.isValid(id))
        return res.status(404).send();
    if (_.isBoolean(body.knowledge) && body.knowledge)
        body.knowledge = true;
    else{
        body.knowledge = false;
    }
    todos.findByIdAndUpdate(id, { $set: body }, { new: true }).then((todo) => {
        if (!todo)
            return res.status(400).send();
        res.send({ todo });
    }).catch((e) => {
        res.status(400).send(e);
    })
});


app.post('/users', (req, res) => {                  //post email and pass to db
    var body = _.pick(req.body, ['email', 'password'])
    var user = new users(body);
    user.save().then((user) => {
        res.send(user)
    }).catch((err) => {
        res.status(400).send(err);
    }); 
})


app.listen((3000), () => {
    console.log('started on port 3000')
})