const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    foto: {
        type: String,
    },
   text: {
        type: String,
    },
    likes: {
        type:String,
        default:'0',
      },
    }, {
        timestamps: true
});
const Task = mongoose.model("mytask", taskSchema)
module.exports =Task
