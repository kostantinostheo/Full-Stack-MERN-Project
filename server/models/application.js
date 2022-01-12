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
    status:{
        type: String,
        required: false
    },
    application_type:{
        type: String,
        required:false
    },
    application_date:{
        type: Date,
        required: false
    },
    type_of_studies:{
        type: String,
        required:false
    },
    country_of_studies:{
        type: String,
        required:false
    },
    university:{
        type: String,
        required:false
    },
    university_type:{
        type: String,
        required:false
    },
    title_of_studies:{
        type: String,
        required:false
    },
    credits:{
        type: Number,
        required:false
    },
    sign_in_date:{
        type: Date,
        required:false
    },
    date_of_graduation:{
        type: Date,
        required:false
    },
    years_of_studies:{
        type: Number,
        required:false
    },
    university_department_of_choice:{
        type: String,
        required:false
    }
})

module.exports = mongoose.model('Application', applicationSchemma)