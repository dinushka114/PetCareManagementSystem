const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
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