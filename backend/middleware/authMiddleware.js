const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');
const User = require("../models/userModel")


const protect = asyncHandler(async (req, res,next) => {
    let token

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) { // Bearer is the token type
        try {
            // Get the token from the header
            token = req.headers.authorization.split(' ')[1] // split into an array and get the second element e.g [bearer, token ]
            const decoded = jwt.verify(token, process.env.JWT_SECRET) // verify the token against the secret key
            req.user = await User.findById(decoded.id).select('-password') // get the user from the database and exclude the password from the response 
            next() // next middleware
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not authorized, token failed')
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized, no token')
    }
    })

module.exports = {  protect}    