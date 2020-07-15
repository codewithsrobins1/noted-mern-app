const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')

//User Model
const User = require('../../models/user');

// @route POST api/users
// @desc Register new user
// @access Public
router.post('/', (req, res) => {
    const {name, email, password} = req.body;

    //Validation - ALL FIELDS ARE REQUIRED
    if(!name || !email || !password){
        return res.status(400).json({ msg: 'Please enter all fields'})  //send a 400 status = bad request (no correct info)        
    }

    //Check for Existing User
    User.findOne( { email })
        //returns a promise object
        .then(user => {
            //Check to see if theres a user already
            if(user){
                return res.status(400).json({ msg: `User already exists`})  
            }

            const newUser = new User({
                name, 
                email,
                password
            });

            //Create salt & hash --- salt creates password hash from a plaintext password
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    //If there is an error, throw out the error
                    if(err) throw err;

                    //Save New Password with Hash
                    newUser.password = hash;

                    //Save new User
                    newUser.save()  //returns promise
                        .then(user => {

                            //Setup Token
                            jwt.sign(
                                { id: user.id }, //get the user id 
                                config.get('jwtSecret'), 
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
            })
        })
})

        
module.exports = router;