const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const boardingSchema = require("../models/boarding");

exports.addNewBoarding = async(req,res)=>{

   //get boarding details
   const {boardingName , boardingImage , boardingemail, boardingaddress, boardingphone, openHoursStart,openHoursEnd} = req.body;

   //validate inputs
   if (!(boardingName && boardingImage && boardingemail && boardingaddress && boardingphone && openHoursStart && openHoursEnd)) {
    res.status(400).send({ message: "All inputs are required" });
   }

   //create new boarding
   const newBoarding = new boardingSchema({
       boardingName:boardingName,
       boardingImage:boardingImage,
       boardingemail:boardingemail,
       boardingaddress:boardingaddress,
       boardingphone:boardingphone,
       openHoursStart:openHoursStart,
       openHoursEnd:openHoursEnd
   })

   //save new boarding
   await newBoarding.save()

   //handle http responses
   .then(result=>{
       res.status(201).json({message:"New boarding added successfully!!"})
   })
   .catch(err=>{
       res.status(400).json({message:err})
   })

}

exports.deleteBoarding = (req,res)=>{

   //get boarding id
   const boarding_id = req.params.id;

   boardingSchema.findOneAndDelete({_id:boarding_id})
   .then(()=>{
       res.status(200).send({
           status:"Boarding deleted"
       });
   }).catch((err)=>{
       console.log(err.message);
       res.status(500).send({status:"Error with delete boarding",error :err.message});
   })

}

exports.getBoarding = (req,res)=>{

    let services = boardingSchema.find({} , function(err , result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({result})
        }
    
    })
}

exports.getOneBoarding = (req,res)=>{

    //get boarding id
   const boarding_id = req.params.id;

   const boardings = boardingSchema.findOne({boarding_id} , function(err , services){
    if(err){
        res.json({"err":err})
    }else{
        res.json({"result":boardings})
    }
})
}

exports.updateBoarding =(req,res) =>{

    //get baording id
    const boarding_id = req.params.id;
    try{
        const boardings = boardingSchema.findOne({boarding_id});
        Object.assign(boardings, req.body);
        boardings.save();
        res.send({data : boardings});
    } catch{
        res.status(404).send({error:"Boarding not found"});
    } 
}

