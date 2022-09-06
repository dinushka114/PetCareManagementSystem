const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { default: Product } = require("../../petcare-frontend/src/component/Home/Product");
const productSchema = require("../models/productModel");



exports.addNewProduct = async(req,res)=>{

   //get product details
   const {productName , productImage , stocks , price , description} = req.body;

   //validate inputs
   if (!(productName && productImage && stocks && price && description)) {
    res.status(400).send({ message: "All inputs are required" });
   }

   //create new product
   const newProduct = new productSchema({
       productName:productName,
       productImage:productImage,
       stocks:stocks,
       price:price,
       description:description
   })

   //save new product
   await newProduct.save()

   

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









