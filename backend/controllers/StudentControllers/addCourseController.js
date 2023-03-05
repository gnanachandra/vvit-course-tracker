const User = require("../../models/UserSchema");
const Course = require("../../models/CourseSchema");
const mongoose = require("mongoose");


const addCourseController = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const courses = user.courses;
  let found = false;
  for (let i = 0; i < courses.length; i++) {
    const currentCourse = await Course.findOne({ _id: courses[i]._id });
    if (
      currentCourse.courseName === req.body.courseName &&
      currentCourse.platform === req.body.platform &&
      currentCourse.enrolledIn === req.body.enrolledIn
    ) {
   
      found = true;
  
      break; // Exit the loop if course is found
    }
  }
  if (found) {
    return res.json({ message: "user already enrolled in the course" });
  } else {
    const newCourse = await Course.create(req.body);
    courses.push(newCourse._id);
    const update = { $set: { courses: courses } };
    await user.update(update);
    return res.json({ message: "user enrolled in the course" });
  }
};
module.exports = addCourseController;
