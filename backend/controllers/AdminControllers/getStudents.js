const User = require("../../models/UserSchema");
const getStudents = async(req,res)=>{
    const form = req.body;
    const filter = {};
    for(let key in form)
    {
        if(form[key]!=='')
        {
            filter[key] = form[key]
        }
    }
    if(Object.keys(filter).length === 0)
    {
        const filteredStudents =await  User.find().populate('courses').sort({"createdAt":-1});
        res.send({"message":filteredStudents});
    }
    else{

        const filteredStudents =await  User.find(filter).populate('courses').sort({"createdAt":-1});
        res.send({"message":filteredStudents});
    }
}
module.exports = getStudents;