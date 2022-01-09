const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const {MongoClient}  = require('mongodb')

require('dotenv').config()


const uri = process.env.CLIENT_DB_URL

/*
    Creating a mongodb client. We can have access to the mongodb and its collection
    Here I create a simple async command that brings the number of users in the db. 
    I use this number to create the next user id. 
*/
async function dbGetLastUserId() {
    const client = new MongoClient(uri, { useUnifiedTopology: true })
    try {
        await client.connect()
        const db = client.db("edoatap")
        const users = db.collection("users")
        const number = await users.estimatedDocumentCount()
        return number
    }catch (error){
        console.error(error)
    }
    finally{
        client.close()
    }
  }



  
//Get all users from the db
router.get('/', async(req,res) => {
    try{
        const users = await User.find()
        res.json(users)
    }
    catch(err){
        res.status(500).json({message : err.message})
    }
})

//Get one user from the db by id
router.get('/:user_id', getUserById, (req,res) => {
    res.send(res.user)
})


//Create one user
router.post('/register', async (req,res) => {

    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    let lastId = await dbGetLastUserId()

    const user = new User({
        user_id: ++lastId,
        status: req.body.email.includes("admin@edoatap.") ? "admin" : "user",
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPass,
        date: req.body.date,
        sex: req.body.sex,
        address: req.body.address, 
        city: req.body.city, 
        city_id: req.body.city_id,
        phone: req.body.phone,
        mobile: req.body.mobile,
        _id_number: req.body._id_number, 
        _id_city: req.body._id_city
    })

    try{
        const newUser = await user.save()
        res.status(201).json(newUser)
    }
    catch(err){
        res.status(400).json({message : err.message})
    }
})

router.post('/login', async (req, res) => {
    
    const user = await User.findOne( { email: req.body.email } )

    if(user == null){
        return res.status(400).send('Cannot find user')
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password))
        {
            const token = jwt.sign({
                user_id: user.user_id,
                status: user.status,
            },
            'secretcode123'
            )
            return res.json({token: token})
        }
        else
            res.send('Fail')
    } catch {
        res.status(500).send("Fail")
    }
})


//Update ones user data
router.patch('/:user_id', getUserById, async (req,res) => {
    if (req.body.firstname != null){
        res.user.firstname = req.body.firstname
    }if(req.body.lastname != null){
        res.user.lastname = req.body.lastname
    }if(req.body.email != null){
        res.user.email = req.body.email
    }if(req.body.address != null){
        res.user.address = req.body.address
    }if(req.body.city != null){
        res.user.city = req.body.city
    }if(req.body.city_id != null){
        res.user.city_id = req.body.city_id
    }if(req.body.phone != null){
        res.user.phone = req.body.phone
    }if(req.body.mobile != null){
        res.user.mobile = req.body.mobile
    }if(req.body._id_number != null){
        res.user._id_number = req.body._id_number
    }if(req.body._id_city != null){
        res.user._id_city = req.body._id_city
    }

    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})


//Delete user
router.delete('/:user_id', (req,res) => {
    
})


async function getUserById(req, res, next){
    const user = await User.findOne( { user_id: req.params.user_id} )
    try {
        if(user == null){
            return res.status(404).json({ message: 'Cannot find user' })
        }
    } catch (error) {
        return res.status(500).json({ message: err.message })
    }

    res.user = user
    next()
}


module.exports = router