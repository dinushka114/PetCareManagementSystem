const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");
//const multer = require("multer");
const db_connection = require("./database/index");
require('dotenv').config();
var cors = require('cors')


const PORT = process.env.PORT || 3001

const indexRoutes = require("./routes/index");
const productRoutes = require("./routes/productRoute")

const app = express();

app.use(cors()) // Use this after the variable declaration
app.use(express.static(path.join(__dirname, 'public')));    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db_connection()

app.use("/" , indexRoutes)
app.use("/productRoute" ,productRoutes)


app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})
/*
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const uploads = multer({storage:storage})
*/