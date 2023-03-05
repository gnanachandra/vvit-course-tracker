const User = require("../../models/UserSchema");
const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const userData = req.body;
    console.log(userData);
    const user = await User.findOne({"email":req.body.email});
    if(!user)
    {
        const password = userData.password;
        const encrypted = await bcrypt.hash(password,10);
        userData["password"] = encrypted;
        console.log(userData);
        const newUser = await User.create(userData);
        res.status(200).send({"message":"userCreated"});
    }
    else{
        res.status(409).send({"message":"user already exists"});
    }
}

module.exports = { handleNewUser };