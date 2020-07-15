const mongoose = require('mongoose')
const Schema = mongoose.Schema;

//Create Schema
const NoteSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

//Create Model Using Schema
module.exports = Note = mongoose.model('note', NoteSchema)