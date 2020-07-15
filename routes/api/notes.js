const express = require('express');
const router = express.Router();
// const auth = require('../../middleware/auth')   //protect routes


//Note Model
const Note = require('../../models/Note');

// @route GET api/notes 
// @desc Get All notes
// @access Public (NEED TO BE AUTHENTICATED)
router.get('/', (req, res) => {
    Note.find() //grab notes from DB and return in JSON form {about: , link: , note: , date:}
        .sort({ date: -1})  //descending sort by date (newest on top)
        .then(notes => res.json(notes))
})

// @route POST api/notes 
// @desc  Create a note
// @access Private  (NEED TO BE AUTHENTICATED)
router.post('/', (req, res) => {
    const newNote = new Note({
        title: req.body.title,
        about: req.body.about,
        link: req.body.link,
        note: req.body.note,
        //date automatically inserted
    });

    //Save the New Note
    newNote.save()
        .then((
            note => res.json(note)
    ));
})

// // @route GET api/notes/:id 
// // @desc  get a particular note
// // @access Private (NEED TO BE AUTHENTICATED)
// router.get('/:id', id, (req, res) => {
        //Get the particular note
//     // Note.findById(id)
// })

// // @route POST api/notes/:id 
// // @desc  edit a note
// // @access Private (NEED TO BE AUTHENTICATED)
// router.post('/:id', (req, res) => {

// })

// @route DELETE api/notes/:id 
// @desc  Delete a note
// @access Private (NEED TO BE AUTHENTICATED)
router.delete('/:id', (req, res) => {
    Note.findById(req.params.id)    //get the ID from the URL
        .then(note => note.remove()
            .then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}))
})
        

module.exports = router;

