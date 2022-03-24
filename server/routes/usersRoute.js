const express = require("express");
const router = express.Router();

const { authUser, getUserProfile,createUser,getUsers,updateUser,deleteUser,getApi } = require("../controllers/usersController");
const { auth } = require("../middlewares/auth");

router.route("/").get(getUsers)
router.route("/login").post(authUser)
router.route("/api").post(getApi)
router.route("/create").post(createUser)

router.route("/user/:id").put(updateUser).delete(deleteUser);
// router.route("/login").post(authUser);
// router.route("/profile").get(protect, getUserProfile);

module.exports = router;
