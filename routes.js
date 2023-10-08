const express = require('express')
const router = express.Router()
const Tasks = require('./task-schema')

router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Tasks.find()
        res.status(200).json(tasks)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.post('/tasks', async (req, res) => {
    try {
        const task = new Tasks(req.body)
        await task.save()
        res.status(200).json({message: 'added successfully!', task})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params
        const task = await Tasks.findByIdAndDelete(id)
        res.status(200).json({message: 'deleted this task successfully', task})
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

router.put('/tasks/:id', async (req, res) => {
    try {
        const { id } = req.params
        const data = req.body
        const task = await Tasks.findByIdAndUpdate(id, data, { new: true })
        res.status(200).json({message: 'task updated successfully', task})  
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


module.exports = router