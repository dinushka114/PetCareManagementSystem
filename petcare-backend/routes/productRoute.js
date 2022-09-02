var express = require('express');
const multer = require("multer")
var router = express.Router();
const verifyToken = require('../middlewares/auth');
const productController = require("../controllers/productController");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});


const upload = multer({ storage: storage });

router.post("/add-product/",productController.addNewProduct);
router.delete("/delete-product/:id",productController.deleteProduct);
router.get("/get-product/",productController.getProduct);
router.get("/get-product/:id",productController.getOneProduct);

module.exports = router;