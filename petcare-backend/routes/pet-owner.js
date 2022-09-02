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
//route middleware eka mama ain kra eka dnna one passe
router.post("/add-pet/:id"  , petOwnerController.addNewPet);

router.delete("/delete-pet/:id/:owner_id" , petOwnerController.deletePet);

router.get("/pets-by-owner/:owner_id" , petOwnerController.getPetsByOwner)

module.exports = router;