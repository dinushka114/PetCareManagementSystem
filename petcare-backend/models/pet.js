const mongoose = require("mongoose");

const pet = new mongoose.Schema({
    petName:{
        type:String,
        required:true,
    },
    breed:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    }
}, {timestamps:true})

const petSchema = new mongoose.model('petSchema' , pet)
module.exports = petSchema;