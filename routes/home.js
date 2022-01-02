const express = require("express")
const router = express.Router()
const Task = require("../models/Task")
const Coments = require("../models/Coments")
const mysort = {createdAt: -1}

router.get('/', async (req, res) => {
        try {
            let coments = await Coments.find()

            let tasks = await Task.find({}).sort(mysort)
            res.render('home', {mytasks: tasks, mycoments: coments})
        } catch (err) {
            res.status(500).send(err)
        }
    })

    .post('/', async (req, res) => {
        const id = req.body.id
        const likes = req.body.likes;
        const task = await Task.findOne({_id: id})
        task.likes = likes
        await task.save()
        res.status(201).json(task)
    })
    .get('/delete/:id', (req, res) => {
        const {
            id
        } = req.params
       Task.deleteOne({
                _id: id
            })
            Coments.deleteMany({
                id: id
            })
            .then(() => {
                console.log('Deleted products successfully!')
                res.redirect("/")
            })
            .catch((err) => console.log(err))

    })

module.exports = router