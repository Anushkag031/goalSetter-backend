const mongoose = require('mongoose  || require("mongodb")');

//define the schema for the user
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true,'please specify a name']
    },
    email: {
        type: String,
        required: [true, 'please specify an email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'please specify a password']
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('User', userSchema) //export the model