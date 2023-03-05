const mongoose = require("mongoose");
const User = require("../models/UserSchema");
const Course = require("../models/CourseSchema");


const addCourseController = async(req,res) =>{
    console.log(req.body.enrolledIn);
    const user = await User.findOne({"email":req.body.email});
    if(user)
    {
        const enrolledCourses = user.courses;
        if(enrolledCourses.length == 0)
        {
            const newCourse = await Course.create(req.body);
            enrolledCourses.push(newCourse._id);
            const update = { $set: { courses: enrolledCourses } };
            await user.update(update);
            res.send({"message":"user document updated with new course"});
        }
        else{ 
                const duplicateFound = await enrolledCourses.filter(async(courseid)=>{
                const current = await Course.findOne({"_id":courseid});
                current.courseName === req.body.courseName && current.platform === req.body.platform && current.enrolledIn === req.body.enrolledIn;
            })
            console.log(typeof(duplicateFound)); 
            if(duplicateFound.length === 0)
            {
                const newCourse = await Course.create(req.body);
                enrolledCourses.push(newCourse._id);
                //console.log("new enrolled courses : ",enrolledCourses);
                const update = { $set: { courses: enrolledCourses } };
                await user.update(update);
                res.send({"message":"user document updated with new course"});
            }
            else{
                console.log(duplicateFound);
                res.send({"message":"user already enrolled into the course"});
            }
        }
    }
    else{
        res.send({"message":"user not found"});
    }
}
module.exports = addCourseController;