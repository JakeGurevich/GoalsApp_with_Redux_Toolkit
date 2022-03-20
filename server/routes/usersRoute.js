const express = require("express");
const router = express.Router();

const { authUser, getUserProfile,createUser,getUsers,updateUser,deleteUser } = require("../controllers/usersController");
//const { protect } = require("../middleware/authMiddleware");

router.route("/login").post(authUser)
router.route("/").get(getUsers)
router.route("/create").post(createUser)

router.route("/user/:id").put(updateUser).delete(deleteUser);
// router.route("/login").post(authUser);
// router.route("/profile").get(protect, getUserProfile);

module.exports = router;
