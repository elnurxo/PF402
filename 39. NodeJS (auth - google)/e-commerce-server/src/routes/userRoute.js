const express = require("express");
const {
  registerUser,
  getAllUsers,
  verifyEmail,
  unlockAccount,
  login,
  refresh,
  logout,
  forgotPassword,
  resetPassword,
} = require("../controllers/userController");
const uploadMiddleware = require("../middlewares/uploadMiddleware");
const authToken = require("../middlewares/authToken");

const router = express.Router();

const upload = uploadMiddleware("userImages");

router.post("/register", upload.single("profileImage"), registerUser);
router.get("/verify-email", verifyEmail);
router.get("/unlock-account", unlockAccount);
router.get("/users", getAllUsers);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/refresh", refresh);
router.post("/logout", logout);

module.exports = router;
