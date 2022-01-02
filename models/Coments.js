const mongoose = require('mongoose')
const comentsSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    foto: {
        type: String,
    },
   text: {
        type: String,
    },
    id: {
        type:String,
      },
    }, {
        timestamps: true
});
const Coments = mongoose.model("yourcoments", comentsSchema)
module.exports =Coments