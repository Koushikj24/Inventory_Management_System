const mongoose = require("mongoose");
require('dotenv').config();
const uri = process.env.MONGODB_URI;


function main() {
    mongoose.connect(uri).then(() => {
        console.log("Succesfull")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };