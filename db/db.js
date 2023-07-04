const mongoose = require("mongoose");
require("dotenv").config();
mongoose.set('strictQuery', false);

const connect = async ( ) =>{
    try{
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('connected to MONGO DB')
    }
    catch(error){
        console.error(error)
        console.log('connected failed')
    }
}

module.exports = {connect}

