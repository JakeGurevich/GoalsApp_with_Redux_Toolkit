// const { Task, validateTask } = require("../models/taskModel");
// const _ = require("lodash");
const dataService = require("../service/dataService");

const asyncHandler = require("express-async-handler");
//const { generateToken } = require("../utils/generateToken");

const getData = asyncHandler(async (req, res) => {
  const data = dataService.getData();
  if (data) {
    console.log(data);

    res.send(data);
  }
});

module.exports = { getData };
