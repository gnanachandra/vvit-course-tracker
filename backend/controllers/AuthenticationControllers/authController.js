const User = require("../../models/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  //checking if the email and password are received in the request
  if (!email || !password)
    return res.status(400).json({status: "failed",message: "Username and password are required.",data: null});

  //finding the user with the email in the database(users collection)
  const foundUser = await User.findOne({ email: email }).exec();

  //if the user is not found sending the response with status code 401-unauthorized
  if (!foundUser)
    return res.status(401).json({ status: "failed", message: "user not found", data: null });

  //if the user if found evaulating the password received and the password stored in the database in hashed form
  const match = await bcrypt.compare(password, foundUser.password);

  //if the passwords are same creating a access token and a refeshToken.
  if (match) {
    // create JWTs
    const accessToken = jwt.sign(
      { email: foundUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "300s" }
    );
    const refreshToken = jwt.sign(
      { email: foundUser.email },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    // Saving refreshToken with current user document
    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    // Creates Secure Cookie with refresh token
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });
    // Sending response after the access token and response tokens are generated for the user.
    res.status(200).json({status: "success",message: "Login succesful",data: foundUser,accessToken: accessToken,});
  } else {
    // if the passwords do not match sending response with status code - 401 - unauthorized
    res.status(401).json({ status: "failed", message: "incorrect password", data: null });
  }
};

module.exports = { handleLogin };
