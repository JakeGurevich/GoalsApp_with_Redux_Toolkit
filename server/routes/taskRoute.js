const express = require("express");
const router = express.Router();

const {
  authUser,
  getUserProfile,
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");
//const { protect } = require("../middleware/authMiddleware");
const { auth } = require("../middlewares/auth");

router.route("/").get(auth, getTasks);
router.route("/create").post(auth, createTask);
router.route("/:id").delete(auth, deleteTask);

//router.route("/task/:id").put(updateTask).delete(deleteTask);
// router.route("/login").post(authUser);
// router.route("/profile").get(protect, getUserProfile);

module.exports = router;
