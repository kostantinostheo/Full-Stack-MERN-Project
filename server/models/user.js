const mongoose = require('mongoose')

const userSchemma = new mongoose.Schema({

    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    mobile:{
        type: Number,
        required: false
    }

})

module.exports = mongoose.model('User', userSchemma)