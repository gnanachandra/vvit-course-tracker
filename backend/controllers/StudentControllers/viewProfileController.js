const User = require("../../models/UserSchema");
const mongoose = require("mongoose");

const viewProfileController = async(req,res)=>{
   
   //getting the data of the user by using the email and populating the courses field
   const userData = await  User.findOne({"email":req.body.email}).populate('courses') 

   //if the userData is not available sending 404 error to the user
   if(!userData){
    res.status(404).json({"status":"failed","message":"No user data available","data":null});
   }
   else{
    //sending the user data available along with the courses enrolled by the user
    res.staus(200).json({"status":"success",'message':userData,"data":userData});
   }
}
module.exports = viewProfileController;