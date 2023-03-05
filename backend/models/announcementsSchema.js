const mongoose = require("mongoose");
const announcementSchema = new mongoose.Schema({
    title:{
        type:String,
        required :[true,"Provide an announcement title"]
    },
    description :{
        type:String,
    },
    deadLine : {
        type:String,
        required : [true,"Provide registeration deadline"]
    },
    pdfName :{
        type:String
    },
    youtubeLink :{
        type:String
    }
},{timestamps:true})

module.exports = mongoose.model("Announcement",announcementSchema);