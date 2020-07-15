const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Scheme
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    register_date: {
        type: Date,
        default: Date.now
    }
});

//Create Model using Scheme Provided
module.exports = User = mongoose.model('user', UserSchema)
