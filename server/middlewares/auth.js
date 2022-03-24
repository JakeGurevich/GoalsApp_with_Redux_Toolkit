const jwt = require("jsonwebtoken");
const { User } = require("../models/userModel");

// Using callback
const auth = async (req, res, next) => {
  console.log(req.header("Authorization"));
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log(token);
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log(decoded.id);
    const user = await User.findById(decoded.id);
    console.log("user", user);
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    res.status(401).send({ error: "Please authenticate" });
  }
};
module.exports = { auth };
