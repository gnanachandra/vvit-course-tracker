const mongoose = require("mongoose");
const User = require("../../models/UserSchema");
const Course = require("../../models/CourseSchema");

const getUserController = async(req,res)=>{
    //destructing the rollNo of the student
    const {rollNo} = req.params;
    //getting the data of the student from the database by using rollNo
    const student =await User.findOne({"rollNo":rollNo}).populate('courses');
    
    //if the student is not found then sending the response with status code - 404 -> not found
    if(!student)
    {
        res.status(404).json({"status":"failed","message":"student not registered","data":null});
    }
    else{
        const data =await student.courses;
        res.status(200).json({"status":"success","message":"student details found","data":student});
    }
}

module.exports = getUserController;