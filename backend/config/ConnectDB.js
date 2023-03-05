const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

const connectDB = async() =>{
    try{
        await mongoose.connect(process.env.DB_URL);
        console.log("MonogDb database connected");
    }
    catch(err)
    {
        console.log("Failed to connect",err);
    }
}
module.exports = connectDB;