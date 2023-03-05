const User = require("../../models/UserSchema");

const getStudents = async(req,res)=>{
    //storing the filters data received in form object
    const form = req.body;

    //storing only the fields which don't have empty string
    const filter = {};
    for(let key in form)
    {
        if(form[key]!=='')
        {
            filter[key] = form[key]
        }
    }

    //if the filters are not applied then sending all the data to the user
    if(Object.keys(filter).length === 0)
    {
        const allStudents =await  User.find().populate('courses').sort({"createdAt":-1});
        res.status(200).json({"status":"success","message":"All students data has been sent","data":allStudents});
    }
    //filtering the students based on the fields selected by the admin
    else{
        const filteredStudents =await  User.find(filter).populate('courses').sort({"createdAt":-1});
        res.status(200).json({"status":"success","message":"All students data has been sent","data":filteredStudents});
    }
}
module.exports = getStudents;