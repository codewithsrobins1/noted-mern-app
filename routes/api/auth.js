const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const auth = require('../../middleware/auth')

//User Model
const User = require('../../models/user');

// @route POST api/auth
// @desc Authenticate User During Sign In
// @access Public
router.post('/', (req, res) => {
    const {email, password} = req.body;

    //Validation
    //Make sure user enters info for all fields
    if(!email || !password){
        return res.status(400).json({ msg: 'Please enter all fields'})  //send a 400 status = bad request (no correct info)        
    }

    //Check for Existing User in DB
    User.findOne({ email })
        //returns a promise object
        .then(user => {
            //Check to see if theres a user already
            if(!user){
                return res.status(400).json({ msg: `User does not exist`})  
            }

            //Validate the Passwords
            bcrypt.compare(password, user.password) //compare plain text PW that is sent in and compared to user password that is hashed
                //returns a promise
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({msg: 'Invalid Credentials'});

                    //Send token and user if they match
                    jwt.sign(
                        { id: user.id }, //get the user id 
                        config.get('jwtSecret'), //issued at
                        { expiresIn: 3600 }, //gives expiration to token 3600 = 1hr
                        //Pass Callback
                        (err, token) => {
                            if(err) throw err;

                            res.json({
                                token,  //Create the Token
                                user: {
                                    id: user.id,
                                    name: user.name,
                                    email: user.email
                                }
                            })
                        }
                    )
                })      
    })
});

// @route GET api/auth/user
// @desc Get User Data
// @access Private
router.get('/user', auth, (req, res) => {
    User.findById(req.user.id)
        .select('-password')            //disregard the password
        .then(user => res.json(user))   //get promise with user
})

        
module.exports = router;