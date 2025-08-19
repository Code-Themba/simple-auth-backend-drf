const express = require("express");
const router = express.Router();
const {
  getUserInfo,
  loginUser,
  registerUser,
} = require("../controllers/userControllers");

router.get("/me/", getUserInfo);
router.post("/register/", registerUser);
router.post("/login/", loginUser);

module.exports = router;
