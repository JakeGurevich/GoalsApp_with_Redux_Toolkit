const { User, validate } = require("../models/userModel");

const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/genereteToken");

const createUser = asyncHandler(async (req, res) => {
  const check = validate(req.body);
  if (check.error) {
    console.log(check);
    return res.status(400).send(check.error.details[0].message);
  }
  const user = {
    name: req.body.name,
    password: req.body.password,
    email: req.body.email,
  };
  let createdUser = new User(user);

  createdUser = await createdUser.save();

  if (createdUser) {
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser._id),
    });
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    console.log(user);
    user.name = req.body.name || user.name;
    user.password = req.body.password || user.password;
    user.email = req.body.email || user.email;
  }
  const updatedUser = await user.save();
  console.log(updatedUser);
  if (updatedUser) {
    res.send(updatedUser);
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);
  if (user) {
    res.send(user);
  }
});

const getUsers = asyncHandler(async (req, res) => {
  console.log(req.params);
  const pageNumber = req.query.page || 1;
  const limit = req.query.limit || 2;
  const users = await User.find()
    .select("-password -isAdmin")
    .sort({ name: 1 });
  // .skip((pageNumber-1)*limit)
  if (users) {
    console.log(`page: ${pageNumber}
            limit : ${limit}`);
    console.log(users.length);
    res.send(users);
  }
});

//@desc  Auth user & get token
//@route Post api/users/login
//@access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByCredentials(email, password);
  if (user) {
    res.send({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  res.send({
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    isAdmin: req.user.isAdmin,
  });
});

module.exports = {
  authUser,
  getUserProfile,
  createUser,
  getUsers,
  updateUser,
  deleteUser,
};
