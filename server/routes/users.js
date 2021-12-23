const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

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

    const user = new User({
        user_id: req.body.user_id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hashedPass,
        mobile: req.body.mobile
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
            res.send(user)
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