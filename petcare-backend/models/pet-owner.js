const mongoose = require("mongoose");

const petOwner = new mongoose.Schema({
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
} , {timestamps:true})


const petOwnerSchama  = new mongoose.model('PetOwnerSchema' , petOwner)
module.exports = petOwnerSchama;