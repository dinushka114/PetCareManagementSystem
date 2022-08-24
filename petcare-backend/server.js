const express = require("express");
const path = require("path")
const indexRoutes = require("./routes/index");

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use("/" , indexRoutes)

app.listen(3000 , ()=>{
    console.log("Server is running on port 3000")
})