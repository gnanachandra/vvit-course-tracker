const User = require("../../models/UserSchema");
const bcrypt = require('bcrypt');
 
const handleNewUser = async (req, res) => {
    //storing the data received in the request in the userData object
    const userData = req.body;
    
    //checking whether an user exists with the given mail
    const user = await User.findOne({"email":req.body.email});

    //if the user doesnot exist then creating a new user and storing the userdata into the users collection
    if(!user)
    {
        //encrypting the password by using bcrypt package
        const password = userData.password;
        const encrypted = await bcrypt.hash(password,10);
        userData["password"] = encrypted;

        //storing the user data containing encrypted password int the users collection
        const newUser = await User.create(userData);
        res.status(200).send({"status":"success","message":"user Created",});
    }
    else{
        //if the user already exists then sending response with 409 status - conflict
        res.status(409).send({"status":"failed","message":"user already exists"});
    }
}

module.exports = { handleNewUser };