var express = require('express');
const multer = require("multer")
var router = express.Router();
const petOwnerController = require("../controllers/pet-owner");
const verifyToken = require('../middlewares/auth');

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
router.post('/login' , petOwnerController.login);
router.post("/add-pet/:id"  , petOwnerController.addNewPet);


module.exports = router;