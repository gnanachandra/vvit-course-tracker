const mongoose = require("mongoose");
const Announcement = require("../../models/announcementsSchema");

const newAnnouncementController = async(req,res)=>{

    //creating a new announcement document
    const newAnnouncement =await Announcement.create(req.body);
    if(newAnnouncement)
    {
        return res.status(200).json({"status":"success","message":"Announcement added successfully","data":null});
    }
    else{
        return res.status(503).json({"status":"failed","message":"something went wrong try again later","data":null});
    }
}

module.exports = newAnnouncementController;