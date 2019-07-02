const { mongoose,ObjectID } = require('./Server/db/mongoose.js')
const { todos } = require('./Server/models/todos.js')
//find
var id = '5d18c6ff04f5491468b1c2e5';
if (!ObjectID.isValid(id)) {
    console.log('id isn\'t valid');
}
// todos.findById(id).then((doc) => {
//     console.log(doc);
// });

// todos.find().then((doc) => {
//     console.log(doc);
// });

// //remove
// todos.remove('5d1b61bdd6bd261d31b46ff5').then((result) => {
//     console.log(result);
// })

// todos.findOneAndRemove({ 'text': 'abed' }).then((result) => {
//     console.log(result);
// })

// todos.findByIdAndRemove('5d1b61bdd6bd261d31b46ff5').then((result) => {
//     console.log(result);
// })




