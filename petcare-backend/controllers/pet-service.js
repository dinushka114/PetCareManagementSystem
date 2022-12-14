const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const serviceSchema = require("../models/service");



exports.addNewService = async(req,res)=>{

   const url = "http://localhost:3000/uploads/"


   //check files of request
   if(!req.file){
        return res.status(400).send({message:'Please upload a file'});
   } 

   //create profile image url
   const imageUrl = url + req.file.originalname;

   //get service details
   const {serviceName ,serviceImage, description, contactNo, openHoursStart, openHoursEnd} = req.body;

   //validate inputs
   if (!(serviceName  && description && contactNo && openHoursStart && openHoursEnd)) {
    res.status(400).send({ message: "All inputs are required" });
   }

   //create new pet
   const newService = new serviceSchema({
       serviceName:serviceName,
       serviceImage:imageUrl,
       description:description,
       contactNo:contactNo,
       openHoursStart:openHoursStart,
       openHoursEnd:openHoursEnd
   })

   //save new service
   await newService.save()

   //save pushed services
   //await serviceRelated.save()

   //handle http responses
   .then(result=>{
       res.status(201).json({message:"New service added successfully!!"})
   })
   .catch(err=>{
       res.status(400).json({message:err})
   })

}

exports.deleteService = (req,res)=>{

   //get service id
   const service_id = req.params.id;

   serviceSchema.deleteOne({_id:service_id})
   .then(()=>{
       res.status(200).send({
           status:"service deleted"
       });
   }).catch((err)=>{
       console.log(err.message);
       res.status(500).send({status:"Error with delete service",error :err.message});
   })

}

exports.getService = (req,res)=>{

    let services = serviceSchema.find({} , function(err , result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({result})
        }
    
    })
}

exports.getOneService =(req,res)=>{

    //get service id
   const service_id = req.params.id;

   const services = serviceSchema.findOne({_id:service_id} , function(err , services){
    if(err){
        res.json({"err":err})
    }else{
        res.json({"result":services})
    }
})

}

exports.updateService = async(req,res) =>{

    const url = "http://localhost:3000/uploads/"

    //get service id
    const service_id = req.params.id;

     //check if the file is there
     if(!req.file){
        return res.status(400).send({ message: 'Pleade upload a service image'});
    }

     //create service url
     const imageUrl = url + req.file.originalname;

   //get service details
   const {serviceName , description, contactNo, openHoursStart, openHoursEnd} = req.body;

   //validate inputs
   if (!(serviceName && description && contactNo && openHoursStart && openHoursEnd)) {
    res.status(400).send({ message: "All inputs are required" });
   }

    //check service exists in database
    const isservice = await serviceSchema.findOne({ _id:service_id });

    //handle http requests
    if(isservice){
        serviceSchema.updateOne({ _id:service_id }, {
            serviceName:serviceName,
            serviceImage:imageUrl,
            description:description,
            contactNo:contactNo,
            openHoursStart:openHoursStart,
            openHoursEnd:openHoursEnd
        }, function (err, result) {
            if (result) {
                return res.status(200).json({ message: "service updated successfully!!" })
            } else {
                return res.status(400).json({ message: "something went wrong" })
            }
        })
    }else{
        return res.status(400).json({ message: "Pet service does not exsists!!" })
    }
}
