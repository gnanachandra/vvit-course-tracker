const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors"); 
const path = require("path");
const connectDB = require("./config/ConnectDB");
const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(cors())
app.use(cookieParser());
connectDB();
const verifyJWT = require("./middleware/verifyJWT");


const {handleNewUser} = require("./controllers/AuthenticationControllers/registerController");
const {handleLogin} = require("./controllers/AuthenticationControllers/authController");
const {handleRefreshToken} = require("./controllers/AuthenticationControllers/refreshTokenController");
const {handleLogout} = require("./controllers/AuthenticationControllers/logoutController");
const viewProfileController = require("./controllers/StudentControllers/viewProfileController");
const addCourseController = require("./controllers/StudentControllers/addCourseController");
const newAnnouncementController = require("./controllers/AdminControllers/newAnnoucementController");
const getAnnouncements = require("./controllers/StudentControllers/getAnnouncements");
const getStudents = require("./controllers/AdminControllers/getStudents");

mongoose.connection.once('open',()=>{
    app.listen(PORT,()=>{
        console.log("Server running on port - ",PORT);
    });
}); 

app.post("/login",handleLogin);
app.post("/register",handleNewUser);
app.get("/logout",handleLogout);
app.get("/refresh",handleRefreshToken);
app.post("/addAnnouncement",newAnnouncementController)
app.get("/getAnnouncements",getAnnouncements);
app.post("/getStudents",getStudents);

app.get("/viewProfile",viewProfileController);
//student controllers - verify jwt before profile and add course
app.use(verifyJWT);
app.post("/addCourse",addCourseController);




app.get("/",(req,res)=>{
    res.send("Hello world");
});

