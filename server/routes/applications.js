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
        application_id: 1000 + (++lastId),
        user_id: req.body.user_id,
        status: req.body.status,
        result: req.body.result,
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
        university_department_of_choice: req.body.university_department_of_choice,
        notes: "-"
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
        if(req.body.status != null)
            res.application.status = req.body.status
        if(req.body.result != null)
            res.application.result = req.body.result
        if(req.body.type_of_studies != null)
            res.application.type_of_studies= req.body.type_of_studies
        if(req.body.country_of_studies != null)
            res.application.country_of_studies= req.body.country_of_studies
        if(req.body.university != null)
            res.application.university= req.body.university
        if(req.body.university_type != null)
            res.application.university_type= req.body.university_type
        if(req.body.title_of_studies != null)
            res.application.title_of_studies= req.body.title_of_studies
        if(req.body.credits != null)
            res.application.credits= req.body.credits
        if(req.body.sign_in_date != null)
            res.application.sign_in_date = req.body.sign_in_date
        if(req.body.date_of_graduation != null)
            res.application.date_of_graduation= req.body.date_of_graduation
        if(req.body.years_of_studies != null)
            res.application.years_of_studies= req.body.years_of_studies
        if(req.body.university_department_of_choice != null)
            res.application.university_department_of_choice= req.body.university_department_of_choice
        if(req.body.notes != null)
            res.application.notes = req.body.notes
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