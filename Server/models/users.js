var mongoose = require('mongoose');

var users = mongoose.model('users', {
    email: {
        type: String,
        trim: true,
        minLength: 1,
        required: true
    }
});

module.exports = { users }
