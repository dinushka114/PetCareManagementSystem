const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const petOwnerSchama = require("../models/pet-owner");
const petSchema = require("../models/pet");
const serviceSchema = require("../models/service");

exports.addNewPet = async(req,res)=>{
   //get service details
   const {serviceName , serviceImage , description, serviceContactNo, openHoursStart, openHoursEnd} = req.body;

   //validate inputs
   if (!(serviceName && serviceImage && description && serviceContactNo && openHoursStart && openHoursEnd)) {
       res.status(400).send({ message: "All inputs are required" });
   }

   //create new pet
   const newService = new serviceSchema({
       serviceName:serviceName,
       serviceImage:serviceImage,
       description:description,
       serviceContactNo:serviceContactNo,
       openHoursStart:openHoursStart,
       openHoursEnd:openHoursEnd
   })

   //save new service
   await newService.save()

   //save pushed services
   await serviceRelated.save()

   //handle http responses
   .then(result=>{
       res.status(201).json({message:"New service added successfully!!"})
   })
   .catch(err=>{
       res.status(400).json({message:err})
   })

}

exports.deleteService = (req,res)=>{

   //get pet id
   const id = req.params.id;
}