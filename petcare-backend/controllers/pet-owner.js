const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const petOwnerSchama = require("../models/pet-owner");

exports.register = async (req, res) => {
    const url = "http://localhost:3000/uploads/"

    //check files of request
    if (!req.file) {
        return res.status(400).send({ message: 'Please upload a file.' });
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
        res.status(200).json({message:"authenticated" , token:token})

    }else{
        res.status(400).send({message:"Invalid Credentials"});
    }

}

exports.addNewPet = (req,res)=>{
    res.send("Add pet")
}