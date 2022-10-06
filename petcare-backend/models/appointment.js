const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
    petOwner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'PetOwner'
    },
    petName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Pet',
    },
    service:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Service',
    },
    date:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:"pending"
    }
}, {timestamps:true})

module.exports = new mongoose.model('Appointment' , appointmentSchema)
