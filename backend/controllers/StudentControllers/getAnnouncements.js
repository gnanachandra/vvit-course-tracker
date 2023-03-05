const mongoose = require("mongoose");
const Announcement = require("../../models/announcementsSchema");
//fetching all the announcements from the collection and sorting them as per the latest first
const getAnnouncements = async(req,res)=>{
    const announcements = await Announcement.find().sort({ createdAt: -1 });
    res.json({"message":announcements});
}
module.exports = getAnnouncements;