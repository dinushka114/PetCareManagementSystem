const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const productSchema = require("../models/productModel");



exports.addNewProduct = async (req, res) => {

    const url = "http://localhost:3000/uploads/"

    //check files of request
    if (!req.file) {
        return res.status(400).send({ message: 'Please upload a profile image.' });
    }

    //create profile image url 
    const imageUrl = url + req.file.originalname;

    //get product details
    const { productName, stocks, price, description } = req.body;

    //validate inputs
    if (!(productName && stocks && price && description)) {
        res.status(400).send({ message: "All inputs are required" });
    }

    //create new product
    const newProduct = new productSchema({
        productName: productName,
        productImage: imageUrl,
        stocks: stocks,
        price: price,
        description: description
    })

    //save new product
    await newProduct.save()



        //handle http responses
        .then(result => {
            return res.status(201).json({ message: "New product added successfully!!" })
        })
        .catch(err => {
            return res.status(400).json({ message: err })
        })

}



exports.deleteProduct = (req, res) => {

    //get product id
    const product_id = req.params.id;

    productSchema.deleteOne({ _id: product_id })
        .then(() => {
            res.status(200).send({
                status: "product deleted"
            });
        }).catch((err) => {
            console.log(err.message);
            res.status(500).send({ status: "Error with delete product", error: err.message });
        })

}

exports.getProduct = (req, res) => {




    let products = productSchema.find({}, function (err, result) {
        if (err) {
            res.json({ msg: err })
        } else {
            res.json({ result })
        }

    })
}

exports.getOneProduct = (req, res) => {

    //get product id
    const product_id = req.params.id;

    const products = productSchema.findOne({ _id: product_id }, function (err, products) {
        if (err) {
            res.json({ "err": err })
        } else {
            res.json({ "result": products })
        }
    })
}

exports.updateProduct = async (req, res) => {

    const url = "http://localhost:3000/uploads/"

    //get product id
    const product_id = req.params.id;

    //check if the file is there
    if (!req.file) {
        return res.status(400).send({ message: 'Please upload a product image' });
    }
    //create product url
    const imageUrl = url + req.file.originalname;

    //get product details
    const { productName, stocks, price, description } = req.body;

    //validate inputs
    if (!(productName && stocks && price && description)) {
        res.status(400).send({ message: "All inputs are required" });
    }

    //check products exists in database
    const isProduct = await productSchema.findOne({ _id: product_id });

    //handle http requests
    if (isProduct) {
        productSchema.updateOne({ _id: product_id }, {
            productName: productName,
            productImage: imageUrl,
            stocks: stocks,
            price: price,
            description: description

        }, function (err, result) {
            if (result) {
                return res.status(200).json({ message: "product updated successfully!!" })
            } else {
                return res.status(400).json({ message: "something went wrong" })
            }
        })
    } else {
        return res.status(400).json({ message: "product does not exsists!!" })
    }
}











