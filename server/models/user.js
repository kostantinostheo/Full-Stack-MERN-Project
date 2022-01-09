const mongoose = require('mongoose')

const userSchemma = new mongoose.Schema({
    user_id:{
        type: Number,
        required: false
    },
    status:{
        type: String,
        required: false
    },
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
    date:{
        type: Date,
        required: false
    },
    sex:{
        type: String,
        required: false
    },
    address:{
        type: String,
        required: false
    },
    city:{
        type: String,
        required: false
    },
    city_id:{
        type: Number,
        required: false
    },
    phone:{
        type: Number,
        required: false
    },
    mobile:{
        type: Number,
        required: false
    },
    _id_number:{
        type: String,
        required: false
    },
    _id_city:{
        type: String,
        required: false
    },

})

module.exports = mongoose.model('User', userSchemma)