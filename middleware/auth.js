//For private routes, add middleware as 2nd parameter in the endpoint to Authenticate

const config = require('config');
const jwt = require('jsonwebtoken');

//Get Authorization token sent from front end 
function auth(req, res, next){
    // user has to supply username/password for the first time 
    // and server returns a access-token in header field 'x-auth-token'
    const token = req.header('x-auth-token');

    //Check for token - If there's no token, deny access
    if(!token){
        return res.status(401).json({msg: 'No token, authorization denied'}) //user is unauthorized
    }

    try{
    // Verify token - If there is a token
    // The middleware checks the request for a token, if one exists it decodes it 
    // JWT token contains the ID of the user when the user was created 
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    //Add user from payload
    req.user = decoded;
    next();
    }
    catch(e) {
        res.status(400).json({ msg: 'Token is not valid'})
    }

}

module.exports = auth;