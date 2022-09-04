const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const productSchema = require("../models/productModel");



exports.addNewProduct = async(req,res)=>{

    //const url = "http://localhost:3000/uploads/"

   //check files of request
   //if(!req.file){
   //     return res.status(400).send({message:'Please upload a file'});
   //} 

   //create profile image url
   //const imageUrl = url + req.file.originalname;

   //get product details
   const {productName , productImage , stocks , price , description} = req.body;

   //validate inputs
   if (!(productName && productImage && stocks && price && description)) {
    res.status(400).send({ message: "All inputs are required" });
   }

   //create new product
   const newProduct = new productSchema({
       name:pname,
       description:description,
       productImage:productImage,
       price:price,
       rating:rating,
       images:images,
       category:category,
       stock:stock,
       numOfReviews:numOfReviews,
       reviews:reviews,
       createAt:createAt
   })

   //save new product
   await newProduct.save()

   //save pushed products
   //await serviceRelated.save()

   //handle http responses
   .then(result=>{
       res.status(201).json({message:"New product added successfully!!"})
   })
   .catch(err=>{
       res.status(400).json({message:err})
   })

}

exports.deleteProduct = (req,res)=>{

   //get product id
   const product_id = req.params.id;

   productSchema.findOneAndDelete(product_id)
   .then(()=>{
       res.status(200).send({
           status:"product deleted"
       });
   }).catch((err)=>{
       console.log(err.message);
       res.status(500).send({status:"Error with delete product",error :err.message});
   })

}

exports.getProduct = (req,res)=>{

    let products = productSchema.find({} , function(err , result){
        if(err){
            res.json({msg:err})
        }else{
            res.json({result})
        }
    
    })
}

exports.getOneProduct = (req,res)=>{

    //get product id
   const product_id = req.params.id;

   const products = productSchema.findOne({product_id} , function(err , products){
    if(err){
        res.json({"err":err})
    }else{
        res.json({"result":products})
    }
})
}



