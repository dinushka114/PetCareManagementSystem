const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const boardingSchema = require("../models/boarding");

exports.addNewBoarding = async(req,res)=>{

    const url = "http://localhost:3000/uploads/"

    //check if the file is there
    if(!req.file){
        return res.status(400).send({ message: 'Pleade upload a boarding image'});
    }

    //create boarding url
    const imageUrl = url + req.file.originalname;

   //get boarding details
   const {boardingName,  boardingemail, boardingaddress, boardingphone, openHoursStart,openHoursEnd} = req.body;

   //validate inputs
    if (!(boardingName  && boardingemail && boardingaddress && boardingphone && openHoursStart && openHoursEnd)) {
        console.log(req.body)
     return res.status(400).send({ message: "All inputs are required" });
    }

   //create new boarding
   const newBoarding = new boardingSchema({
       boardingName:boardingName,
       boardingImage:imageUrl,
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
       return res.status(201).json({message:"New boarding added successfully!!"})
   })
   .catch(err=>{
       return res.status(400).json({message:err})
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

exports.updateBoarding = async(req,res) =>{

    const url = "http://localhost:3000/uploads/"

    //get baording id
    const boarding_id = req.params.id;

     //check if the file is there
     if(!req.file){
        return res.status(400).send({ message: 'Pleade upload a boarding image'});
    }

     //create boarding url
     const imageUrl = url + req.file.originalname;

   //get boarding details
   const {boardingName , boardingemail, boardingaddress, boardingphone, openHoursStart,openHoursEnd} = req.body;

   //validate inputs
   if (!(boardingName && boardingemail && boardingaddress && boardingphone && openHoursStart && openHoursEnd)) {
    res.status(400).send({ message: "All inputs are required" });
   }

    //check boarding exists in database
    const isboarding = await boardingSchema.findOne({ _id:boarding_id });

    //handle http requests
    if(isboarding){
        boardingSchema.updateOne({ _id:boarding_id }, {
            boardingName:boardingName,
            boardingImage:imageUrl,
            boardingemail:boardingemail,
            boardingaddress:boardingaddress,
            boardingphone:boardingphone,
            openHoursStart:openHoursStart,
            openHoursEnd:openHoursEnd
        }, function (err, result) {
            if (result) {
                return res.status(200).json({ message: "boarding updated successfully!!" })
            } else {
                return res.status(400).json({ message: "something went wrong" })
            }
        })
    }else{
        return res.status(400).json({ message: "Pet boarding does not exsists!!" })
    }
}

