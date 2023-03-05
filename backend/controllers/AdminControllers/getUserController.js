const mongoose = require("mongoose");
const User = require("../../models/UserSchema");
const Course = require("../../models/CourseSchema");

const getUserController = async(req,res)=>{
    const {rollNo} = req.params;
    const student =await User.findOne({"rollNo":rollNo});
    console.log(student);
    if(!student)
    {
        res.json({"message":"User not registered"});
    }
    else{
        const data =await student.courses;
        console.log(data);
        res.json({"message":"user found"});
    }
}

module.exports = getUserController;