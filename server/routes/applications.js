const express = require('express')
const router = express.Router()
const Application = require('../models/application')
const jwt = require('jsonwebtoken')
const application = require('../models/application')

const {MongoClient}  = require('mongodb')

require('dotenv').config()

const uri = process.env.CLIENT_DB_URL

async function dbGetLastApplicationId() {
    const client = new MongoClient(uri, { useUnifiedTopology: true })
    try {
        await client.connect()
        const db = client.db("edoatap")
        const users = db.collection("applications")
        const number = await users.estimatedDocumentCount()
        return number
    }catch (error){
        console.error(error)
    }
    finally{
        client.close()
    }
  }



//Get all applications from the db
router.get('/api/', async(req,res) => {
    try{
        const applications = await Application.find()
        res.json(applications)
    }
    catch(err){
        res.status(500).json({message : err.message})
    }
})


///////////////////////////////////////////////////////////////



/* Get all applications for specific user */
router.get('/api/:user_id', getApplicationByUserId, (req,res) => {
    res.send(res.application)
})


async function getApplicationByUserId(req, res, next){
    const application = await Application.find( { user_id: req.params.user_id} )
    try {
        if(application == null){
            return res.status(404).json({ message: 'Cannot find applications for user' })
        }
    } catch (error) {
        return res.status(500).json({ message: err.message })
    }

    res.application = application
    next()
}


///////////////////////////////////////////////////////////////



/* Get data for a specific application */
router.get('/api/appid/:application_id', getApplicationByAppId, (req,res) => {
    res.send(res.application)
})


async function getApplicationByAppId(req, res, next){
    const application = await Application.findOne( { application_id: req.params.application_id} )
    try {
        if(application == null){
            return res.status(404).json({ message: 'Cannot find applications for user' })
        }
    } catch (error) {
        return res.status(500).json({ message: err.message })
    }

    res.application = application
    next()
}


///////////////////////////////////////////////////////////////


/* Submit a new application to database */
router.post('/api/submit', async (req,res) => {

    let lastId = await dbGetLastApplicationId()

    const application = new Application({
        application_id: ++lastId,
        user_id: req.body.user_id,
        status: req.body.status,
        application_type: req.body.application_type,
        application_date: Date.now(),
        type_of_studies: req.body.type_of_studies,
        country_of_studies: req.body.country_of_studies,
        university: req.body.university,
        university_type: req.body.university_type,
        title_of_studies: req.body.title_of_studies,
        credits: req.body.credits,
        sign_in_date: req.body.sign_in_date,
        date_of_graduation: req.body.date_of_graduation,
        years_of_studies: req.body.years_of_studies,
        university_department_of_choice: req.body.university_department_of_choice
    })

    try{
        const newApplication = await application.save()
        res.status(201).json(newApplication)
    }
    catch(err){
        res.status(400).json({message : err.message})
    }
})



/////////////////////////////////////////////////////////////////


//Update ones user data
router.patch('/api/update/:application_id', getApplicationByApplicationId, async (req,res) => {
    
    if (req.body.temp != null){
        res.application.temp = req.body.temp
    }
    try {
        const updateApplication = await res.application.save()
        res.json(updateApplication)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

async function getApplicationByApplicationId(req, res, next){
    const application = await Application.findOne( { application_id: req.params.application_id} )
    try {
        if(application == null){
            return res.status(404).json({ message: 'Cannot find applications for user' })
        }
    } catch (error) {
        return res.status(500).json({ message: err.message })
    }

    res.application = application
    next()
}

module.exports = router