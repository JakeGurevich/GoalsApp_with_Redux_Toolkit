const express = require("express");
const router = express.Router();

const {
 getData
} = require("../controllers/dataController");
//const { protect } = require("../middleware/authMiddleware");
const { auth } = require("../middlewares/auth");

router.route("/").get( getData);




module.exports = router;
