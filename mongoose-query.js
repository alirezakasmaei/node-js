const { mongoose,ObjectID } = require('./Server/db/mongoose.js')
const { todos } = require('./Server/models/todos.js')

var id = '5d18c6ff04f5491468b1c2e5';
if (!ObjectID.isValid(id)) {
    console.log('id isn\'t valid');
}

todos.findById(id).then((doc) => {
    console.log(doc);
});

// todos.findOne({ text: 'postman has posted again' }).then((doc) => {
//     console.log(doc);
// });