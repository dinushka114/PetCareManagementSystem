var express = require('express');
const multer = require("multer")
var router = express.Router();
const verifyToken = require('../middlewares/auth');
const serviceController = require("../controllers/pet-service");



const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});


const upload = multer({ storage: storage });




router.post("/add-service/", upload.single("serviceImage"), serviceController.addNewService);
router.delete("/delete-service/:id",serviceController.deleteService);
router.get("/get-service/",serviceController.getService);
router.get("/get-service/:id",serviceController.getOneService);
router.put("/update-service/:id",upload.single('serviceImage'),serviceController.updateService)


module.exports = router;