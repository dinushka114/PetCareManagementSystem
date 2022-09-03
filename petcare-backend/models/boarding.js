const mongoose = require("mongoose");

const boardingSchema = new mongoose.Schema({
    boardingName:{
        type:String,
        required:true,
    },
    boardingImage:{
        type:String,
        required:true,      
    },
    boardingemail:{
        type:String,
        required:true,
    },
    boardingaddress:{
        type:String,
        required:true
    },
    boardingphone:{
        type:String,
        required:true
    },
    openHoursStart:{
        type:String,
        required:true
    },
    openHoursEnd:{
        type:String,
        required:true
    },
}, {timestamps:true})

module.exports = new mongoose.model('Boarding' , boardingSchema)