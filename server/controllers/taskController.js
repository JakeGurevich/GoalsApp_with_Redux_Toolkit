const { Task, validateTask } = require("../models/taskModel");
const _ = require("lodash");

const asyncHandler = require("express-async-handler");
//const { generateToken } = require("../utils/generateToken");

const createTask = asyncHandler(async (req, res) => {
  const result = validateTask(req.body);

  if (result.error) {
    return res.status(400).send(result.error.details[0].message);
  }
  const task = {
    name: req.body.name,
    description: req.body.description,
  };
  const createdTask = new Task(task);
  const newTask = await createdTask.save();
  console.log(newTask);
  if (newTask) {
    res.send(newTask);
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

const getTasks = asyncHandler(async (req, res) => {
  console.log(req.params);
  const pageNumber = req.query.page || 1;
  const limit = req.query.limit || 2;
  let tasks = await Task.find().sort({ name: 1 }).lean();
  // tasks = tasks.map((task) => _.pick(task, ["name", "description"]));
  // .skip((pageNumber-1)*limit)
  if (tasks) {
    // console.log(`page: ${pageNumber}
    //         limit : ${limit}`);
    // console.log(tasks.length);
    res.send(tasks);
  }
});

//@desc  Auth user & get token
//@route Post api/users/login
//@access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      //token: generateToken(user._id),
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

module.exports = { createTask, getTasks };
