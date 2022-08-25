const mongoose = require("mongoose");

const petOwnerSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    contact:{
        type:String,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    image:{
        type:String,
    },
    password:{
        type:String,
        required:true
    },
    token:{
        type:String
    },
    pets :[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Pet',
        default:null
    }]
} , {timestamps:true})


module.exports = new mongoose.model('PetOwner' , petOwnerSchema)