const User = require("../../models/UserSchema");
const Course = require("../../models/CourseSchema");
const mongoose = require("mongoose");


const addCourseController = async (req, res) => {

  //getting the data of the user logged in 
  const user = await User.findOne({ email: req.body.email });

  //getting the courses in which the student is currently enrolled  in
  const courses = user.courses;

  //a varaiable to know whether student requested for a duplicate enrollment
  let found = false;

  //checking for duplicate enrollment
  for (let i = 0; i < courses.length; i++) {
    const currentCourse = await Course.findOne({ _id: courses[i]._id });
    if (
      currentCourse.courseName === req.body.courseName &&
      currentCourse.platform === req.body.platform &&
      currentCourse.enrolledIn === req.body.enrolledIn) {
   
      found = true;
  
      break; // Exit the loop if course is found
    }
  }

  //if the course is found already in the students data sending response with status code 409 - conflict
  if (found) {
    return res.status(409).json({"status":"failed","message": "user already enrolled in the course","data":user});
  } else {

    //creating a new course document
    const newCourse = await Course.create(req.body);

    //storing the new course _id in the courses array which is an array of objectId's representing the document id's
    //of the courses that are enrolled by the student
    courses.push(newCourse._id);

    //updating the courses field of the student
    const update = { $set: { courses: courses } };
    await user.update(update);

    //sending the response to the user with updated student data and response code 200
    return res.json({"status":"success","message": "user enrolled in the course","data":user});
  }
};
module.exports = addCourseController;
