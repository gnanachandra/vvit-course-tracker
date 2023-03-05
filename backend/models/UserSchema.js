const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name : {
        type:String,
        required : [true,"provide studentName"],
        
    },
    rollNo :{
        type:String,
        required : [true,"provide rollNo"],
    },
    email:{
        type:String,
        required : [true,"provide email"],
    },
    branch:{
        type:String,
        enum : ['CSE','IT','ECE','EEE','CSM','AID','IOT','CIC','MECH','CIVIL'],
        required : [true,"provide branch"],
    },
    
    section :{
        type:String,
        required : [true,"provide section"],
    },
    AICTEStudentID :{
        type:String,
        required:[true,"provide AICTE ID "],
    },
    year :{
        type:String,
        required:[true,"provide year"]
    },
    password :{
        type:String,
        required:[true,"provide Password"] 
    },
    courses : [{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }],
    refreshToken:String,
    role:{
        type:String,
        default : "Student"
    }
},{timestamps:true})

module.exports = mongoose.model("User",UserSchema);