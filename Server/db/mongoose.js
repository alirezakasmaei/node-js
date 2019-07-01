var mongoose = require('mongoose');
var { ObjectID } = require('mongodb');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = { mongoose,ObjectID }
