var mongoose = require('mongoose');

var todos = mongoose.model('todos', {
    text: {
        type: String,
        required: true,             //not null
        minLength: 1,
        trim: true                  //delete firsts and lasts spases
    },
    age: { type: Number },
    knowledge: {
        type: Boolean,
        default: false              //default value
    }
});

module.exports = { todos }
