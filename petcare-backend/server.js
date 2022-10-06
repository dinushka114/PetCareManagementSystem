const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");
const db_connection = require("./database/index");
const cors = require("cors")
require('dotenv').config();

const PORT = process.env.PORT || 3001

const indexRoutes = require("./routes/index");
const petOwnerRoutes = require("./routes/pet-owner")
const serviceRoutes = require("./routes/pet-service")

const app = express();

app.use(express.static(path.join(__dirname, 'public')));    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

db_connection()

app.use("/" , indexRoutes)
app.use("/pet-service" ,serviceRoutes)
app.use("/pet-owner" , petOwnerRoutes)
app.use("/pet-boarding" ,boardingRoutes)


app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})