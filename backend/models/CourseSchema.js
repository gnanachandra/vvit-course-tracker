const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    courseName : {
        type:String,
        required : [true,"Provide CourseName : "],
    },
    platform : {
        type : String,
        required : [true,"Provide Course Platform"],
    },
    enrolledIn : {
        type : String,
        required : [true,"Provide Enrolled Semester"],
    }
});

module.exports = mongoose.model("Course",CourseSchema);