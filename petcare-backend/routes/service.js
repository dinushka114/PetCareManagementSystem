var express = require('express');
const multer = require("multer")
var router = express.Router();
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

router.post("/add-service/:id"  , addNewService);
router.delete("/delete-delete/:id" , deleteService);

module.exports = router;