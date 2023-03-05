const User = require("../../models/UserSchema");
const mongoose = require("mongoose");
const viewProfileController = async(req,res)=>{
   const userData = await  User.findOne({"email":req.body.email}).populate('courses') // populate the courses field
   if(!userData){
    res.json({"message":"No user data available"});
   }
   else{
    res.json({'message':userData});
   }
}
module.exports = viewProfileController;