require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8000;
const dbUrl = process.env.MONGODB_URL;

main()
    .then(() =>{
        console.log("Connected to Database");
    })
    .catch((err) =>{
        console.log(err);
    });

async function main() {
    await mongoose.connect(dbUrl);
}

app.listen(PORT, () =>{
    console.log("Sever is listening to the port 8080");
});