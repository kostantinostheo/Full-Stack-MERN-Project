require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Conected to Database'))

app.use(cors())
app.use(express.json())

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)



app.listen(3000, ()=> console.log('Api started..'))

