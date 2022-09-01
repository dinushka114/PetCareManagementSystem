const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    serviceName:{
        type:String,
        required:true,
    },
    serviceImage:{
        type:String,
        required:true,      
    },
    description:{
        type:String,
        required:true,
    },
    contactNo:{
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

module.exports = new mongoose.model('Service' , serviceSchema)