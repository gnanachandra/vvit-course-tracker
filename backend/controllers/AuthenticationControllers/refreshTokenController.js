const User = require("../../models/UserSchema");
const jwt = require("jsonwebtoken");

const handleRefreshToken = async (req, res) => {
  const cookies = req.cookies;

  //checking if the cookies contains jwt cookie
  if (!cookies?.jwt)
    return res
      .status(401)
      .json({ status: "failed", message: "JWT cookie not found" });

  const refreshToken = cookies.jwt;
  //finding the user with the refresh token
  const foundUser = await User.findOne({ refreshToken }).exec();

  //if the user is not found then sending the status 403- forbidden
  if (!foundUser) return res.sendStatus(403);
  // evaluate jwt
  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.email !== decoded.email) return res.sendStatus(403);

    const accessToken = jwt.sign(
      { email: foundUser.email },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "10s" }
    );
    res.json({ accessToken });
  });
};

module.exports = { handleRefreshToken };
