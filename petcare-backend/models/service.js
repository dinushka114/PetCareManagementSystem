const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
    serviceName:{
        type:String,
        required:true,
    },
    serviceImage:{
        type:String,
    },
    description:{
        type:String,
        required:true,
    },
    contactNo:{
        type:Number,
        required:true
    },
    openHoursStart:{
        type:Date,
        required:true
    },
    openHoursEnd:{
        type:Date,
        required:true
    },
}, {timestamps:true})

module.exports = new mongoose.model('Service' , serviceSchema)