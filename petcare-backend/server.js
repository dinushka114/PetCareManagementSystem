const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");
const db_connection = require("./database/index");
require('dotenv').config();

const PORT = process.env.PORT || 3001

const indexRoutes = require("./routes/index");
const petOwnerRoutes = require("./routes/pet-owner")

const app = express();

app.use(express.static(path.join(__dirname, 'public')));    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db_connection()

app.use("/" , indexRoutes)
app.use("/pet-owner"  ,petOwnerRoutes) 


app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})