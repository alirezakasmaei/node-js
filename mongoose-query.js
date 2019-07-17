const { mongoose,ObjectID } = require('./Server/db/mongoose.js')
const { todos } = require('./Server/models/todos.js')
//find
var id = '5d1b7463d6bd261d31b47337';
if (!ObjectID.isValid(id)) {
    console.log('id isn\'t valid');
}
// todos.findById(id).then((doc) => {
//     console.log(doc);
// });

// todos.find().then((doc) => {
//     console.log(doc);
// });

//remove
// var bb = new ObjectID("5d2ddab61bee600f0886361e");
// todos.remove(bb).then((result) => {
//     console.log(result);
// })

// todos.findOneAndRemove({ 'text': 'abed' }).then((result) => {
//     console.log(result);
// })

// todos.findByIdAndRemove('5d1b61bdd6bd261d31b46ff5').then((result) => {
//     console.log(result);
// })




