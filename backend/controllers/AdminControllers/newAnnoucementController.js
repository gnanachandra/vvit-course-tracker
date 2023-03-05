const mongoose = require("mongoose");
const Announcement = require("../../models/announcementsSchema");

const newAnnouncementController = async(req,res)=>{
    const newAnnouncement =await Announcement.create(req.body);
    if(newAnnouncement)
    {
        return res.json({"message":"Announcement added successfully"});
    }
    else{
        return res.json({"message":"Something went wrong"});
    }
}

module.exports = newAnnouncementController;