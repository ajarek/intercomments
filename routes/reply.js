const express = require('express')
const router = express.Router()
const Coments = require("../models/Coments")


router.get('/reply',  (req, res) => {
    let  idTask= req.query.data
res.render('reply', {idTask})
})

router.post('/reply', async (req, res) => {
    try {
        const newComents = new Coments({
            name: req.body.name,
            foto: req.body.foto,
            text: req.body.text,
            id: req.body.id,
        })
       
        const newcoments = await newComents.save()
        console.log(newcoments)
        res.redirect('/')
        
    } catch (err) {
        res.render('task', () => console.log('Status 500 ,An error happened!'))
    }
})

module.exports = router