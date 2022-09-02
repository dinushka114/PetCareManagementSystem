const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const path = require("path")
const indexRoutes = require("./routes/index");

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

app.use("/" , indexRoutes)

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000")
})

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopologyL: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", ()=> {
    console.log("Mongodb Connection Success!");
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`)
})