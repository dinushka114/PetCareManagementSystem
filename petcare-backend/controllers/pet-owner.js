const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const petOwnerSchama = require("../models/pet-owner");
const petSchema = require("../models/pet");
const { default: mongoose } = require("mongoose");
const e = require("express");

exports.register = async (req, res) => {
    const url = "http://localhost:3000/uploads/"

    //check files of request
    if (!req.file) {
        return res.status(400).send({ message: 'Please upload a profile image.' });
    }

    //create profile image url 
    const imageUrl = url + req.file.originalname;

    //get req.body data to variables
    const { fullName, email, contact, address, password, passwordConfirm } = req.body;

    //simple validations of user inputs
    if (!(fullName && email && contact && address && password && passwordConfirm)) {
        return res.status(400).json({ message: "All input is required" });
    }

    //check email already registered or not
    const isPetOwnerExists = await petOwnerSchama.findOne({ email });

    if (isPetOwnerExists) {
        return res.status(409).send({ message: "User Already Exist!!" });
    }

    //check both passwords are same or not
    if (password === passwordConfirm) {

        //encrypt password before save to the database
        encryptedPassword = await bcrypt.hash(password, 10);

        const newPetOwner = await petOwnerSchama.create({
            fullName: fullName,
            email: email.toLowerCase(),
            contact: contact,
            address: address,
            image: imageUrl,
            password: encryptedPassword,
        })

        //generate jwt token
        const token = jwt.sign(
            { user_id: newPetOwner._id, email },
            process.env.JWT_KEY, {
            expiresIn: "2h",
        }
        )

        newPetOwner.token = token;
        res.json({ message: "user registered successfully!!" })


    } else {
        return res.status(400).send({ message: 'Passwords must be same' });
    }


}

exports.login = async (req, res) => {
    //get email and password from req.body
    const { email, password } = req.body;

    //validate email and password
    if (!(email && password)) {
        res.status(400).send({ message: "All inputs are required" });
    }

    //chec pet owner exists in database
    const petOwner = await petOwnerSchama.findOne({ email });

    if (petOwner && (await bcrypt.compare(password, petOwner.password))) {

        //create token
        const token = jwt.sign(
            { user_id: petOwner._id, email },
            process.env.JWT_KEY, {
            expiresIn: "2h",
        }
        )

        petOwner.token = token;
        res.status(200).json({ message: "authenticated", token: token  , user_id:petOwner._id})

    } else {
        res.status(400).send({ message: "Invalid Credentials" });
    }

}

exports.updateProfile = async (req, res) => {
    const url = "http://localhost:3000/uploads/"

    const ownerId = req.params.id;

    //check files of request
    if (!req.file) {
        return res.status(400).send({ message: 'Please upload a profile image.' });
    }

    //create profile image url 
    const imageUrl = url + req.file.originalname;

    //get req.body data to variables
    const { fullName, email, contact, address } = req.body;

    //simple validations of user inputs
    if (!(fullName && email && contact && address)) {
        return res.status(400).json({ message: "All input is required" });
    }

    //chec pet owner exists in database
    const petOwner = await petOwnerSchama.findOne({ _id:ownerId });

    //handle http requests
    if(petOwner){
        petOwnerSchama.updateOne({ _id: ownerId }, {
            fullName: fullName,
            email: email.toLowerCase(),
            contact: contact,
            address: address,
            image: imageUrl,
        }, function (err, result) {
            if (result) {
                return res.status(200).json({ message: "user updated successfully!!" })
            } else {
                return res.status(400).json({ message: "something went wrong" })
            }
        })
    }else{
        return res.status(400).json({ message: "Pet owner does not exsists!!" })
    }


}


exports.getPetsByOwner = async (req, res) => {

    //get owner id
    const ownerId = req.params.owner_id;

    //get pets data by owner id
    await petSchema.find({ owner: ownerId })

        //handle response
        .then(result => {
            res.status(200).json({ pets: result })
        })

        .catch(err => {
            res.status(400).json({ message: "Error" })
        })


}

exports.addNewPet = async (req, res) => {

    //get pet owner id from url parameters /:id
    const id = req.params.id;

    //get pet details
    const { petName, breed, age } = req.body;

    //validate inputs
    if (!(petName && breed && age)) {
        res.status(400).send({ message: "All inputs are required" });
    }

    //create new pet
    const newPet = new petSchema({
        petName: petName,
        breed: breed,
        age: age,
        owner: id
    })

    //save new pet
    await newPet.save()

    //get current pet owner
    const ownerRelated = await petOwnerSchama.findById(id);

    //push pets to current pet owner pets array
    ownerRelated.pets.push(newPet);

    //save pushed pets
    await ownerRelated.save()

        //handle http responses
        .then(result => {
            res.status(201).json({ message: "New pet added successfully!!" })
        })
        .catch(err => {
            res.status(400).json({ message: err })
        })

}

exports.deletePet = async (req, res) => {

    //get pet id
    const id = req.params.id;

    //get pet owner id
    const ownerId = req.params.owner_id;

    //check pet exists or not
    const toDelete = await petSchema.findById(id)

    //convert pet id to object id
    var petObjectId = mongoose.Types.ObjectId(id);

    //get owner from pet chema
    await petOwnerSchama.updateOne({ _id: ownerId }, { $pull: { pets: { _id: ownerId } } }, { safe: true, multi: false });
    // console.log(petOwnerSchama.pets)


    // console.log(ownerRelated)

    //remove pet from pet owner array
    // ownerRelated.pets.pull({ _id: id })

    //handle http responces
    if (toDelete) {
        await petSchema.deleteOne({ _id: id });
        return res.status(200).json({ message: "Pet deleted sucessfully!" })
    } else {
        return res.status(400).json({ message: "Pet does not exsists" })
    }

}