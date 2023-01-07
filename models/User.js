const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username : {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Usernames should be longer than 5 characters'],
    },
    password : {
        type: String,
        required: true
    },
    role : {
        type: String,
        enum: ['Admin', 'User'],
        default: 'User'
    }
}, {timestamps : true})

module.exports = mongoose.model('User', userSchema)