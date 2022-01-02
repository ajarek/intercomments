const express = require('express')
const router = express.Router()
const Task = require("../models/Task")

router.get('/task', (req, res) => {
    res.render('task')
})

router.post('/task', async (req, res) => {
    try {
        const newTask = new Task({
            name: req.body.name,
            foto: req.body.foto,
            text: req.body.text,
        })
        const newtask = await newTask.save()
        console.log(newtask)
        res.redirect('/')
        
    } catch (err) {
        res.render('task', () => console.log('Status 500 ,An error happened!'))
    }
})
module.exports = router