const mongoose = require('mongoose')

const applicationSchemma = new mongoose.Schema({
    application_id:{
        type: Number,
        required: false
    },
    user_id:{
        type: Number,
        required: false
    },
    temp:{
        type: String,
        required: false
    }
})

module.exports = mongoose.model('Application', applicationSchemma)