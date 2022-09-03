const express = require("express");
const path = require("path")
const bodyParser = require("body-parser");
const db_connection = require("./database/index");
const indexRoutes = require("./routes/index");
const boardingRoutes = require("./routes/pet-boarding")
require('dotenv').config();
var cors = require('cors')

const PORT = process.env.PORT || 3001

const app = express();

app.use(cors())
app.use(express.static(path.join(__dirname, 'public')));    
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

db_connection()

app.use("/" , indexRoutes)
app.use("/pet-boarding" ,boardingRoutes)


app.listen(PORT , ()=>{
    console.log(`Server is running on port ${PORT}`)
})