const express = require('express')
const mongoose = require('mongoose')
const tasksRoutes = require('./routes')
const cors = require('cors')
const port = 3000

mongoose.connect('mongodb://admin:admin@localhost:27017/todo-app?authSource=admin')

const db = mongoose.connection

db.on('error', () => {
    console.log('connection error')
})

db.on('open', () => {
    console.log('connected to db')
})

const app = express()

app.use(cors())
app.use(express.json())
app.use(tasksRoutes)

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})
