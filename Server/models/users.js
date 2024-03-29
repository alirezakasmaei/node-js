const mongoose = require('mongoose');
const validator = require('validator')
var users = mongoose.model('users', {
    email: {
        type: String,
        required:true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message : '{VALUE} is not a valid Email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        
    },
    tokens: [{
        access: {
            type: String,
            required:true
        },
        token: {
            type: String,
            required:true
        }
    }]
});

module.exports = { users }
