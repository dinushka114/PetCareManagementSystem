var express = require('express');
var router = express.Router();
const petOwnerController = require("../controllers/pet-owner")

const multer = require("multer")



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});


const upload = multer({ storage: storage });

router.post('/register' , upload.single('image') , petOwnerController.register);


module.exports = router;