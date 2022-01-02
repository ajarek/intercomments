const express = require("express")
const dotenv = require("dotenv")
const mongoose = require('mongoose')
const PORT = process.env.PORT || 3000

dotenv.config()

const app = express()
mongoose.connect(process.env.DB, () => {
    console.log('Connection to mongodb database was successful!🌳')
})
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs')

app.use(require('./routes/home'))
app.use(require('./routes/task'))
app.use(require('./routes/reply'))


app.listen(PORT, () => console.log(`backend is up port ${PORT} 🚀`))