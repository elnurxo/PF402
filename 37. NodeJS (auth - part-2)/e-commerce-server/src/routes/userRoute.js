const express = require("express");
const {
  registerUser,
  getAllUsers,
  verifyEmail,
  login,
} = require("../controllers/userController");
const uploadMiddleware = require("../middlewares/uploadMiddleware");

const router = express.Router();

const upload = uploadMiddleware("userImages");

router.post("/register", upload.single("profileImage"), registerUser);
router.get("/verify-email", verifyEmail);
router.get("/users", getAllUsers);
router.post('/login', login);

module.exports = router;
