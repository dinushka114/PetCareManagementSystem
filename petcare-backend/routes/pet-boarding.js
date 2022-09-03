var express = require('express');
const multer = require("multer")
var router = express.Router();
const Controller = require("../controllers/pet-boarding");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});


const upload = multer({ storage: storage });

router.post("/add/",Controller.addNewBoarding);
router.delete("/delete/:id",Controller.deleteBoarding);
router.get("/get/",Controller.getBoarding);
router.get("/get/:id",Controller.getOneBoarding);
router.put("/update/:id",Controller.updateBoarding)

module.exports = router;