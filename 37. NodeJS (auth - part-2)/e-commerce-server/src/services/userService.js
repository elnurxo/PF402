const UserModel = require("../models/userModel");
const { verifyToken, generateToken } = require("../utils/jwt");
const bcrypt = require("bcrypt");
const moment = require("moment");

const MAX_ATTEMPTS = 3;
const LOCK_TIME = 10 * 60 * 1000; //10 minutes

//get all, get by id, get by email, delete, update profile
// login, register, forgot-password, reset-password, ban/un-ban
const getAll = async () => await UserModel.find().select("-password");

const getOne = async (id) => await UserModel.findById(id).select("-password");

const getByEmail = async (email) =>
  await UserModel.find({ email: email }).select("-password");

const register = async (payload) => {
  try {
    const { email, username } = payload;
    const existedUser = await UserModel.findOne({
      $or: [{ email }, { username }],
    });
    if (existedUser) {
      return {
        success: false,
        message: "username or email already taken!",
      };
    } else {
      return {
        success: true,
        data: await UserModel.create(payload),
      };
    }
  } catch (error) {
    return error.message || "internal server error!";
  }
};

//verify email service
const verifyEmail = async (token) => {
  const isValidToken = verifyToken(token);
  if (isValidToken) {
    const { id } = isValidToken;
    const user = await UserModel.findById(id);
    if (user.emailVerified) {
      return {
        success: false,
        message: "email already has been verified",
      };
    } else {
      user.emailVerified = true;
      await user.save();
      return {
        success: true,
        message: "email has been verified successfully!",
      };
    }
  } else {
    throw new Error("invalid or expired token!");
  }
};

const login = async (credentials) => {
  const { email, password } = credentials;

  const user = await UserModel.findOne({ email });

  if (!user) {
    throw new Error("Invalid credentials!");
  }

  //is verified
  if (!user.emailVerified) {
    throw new Error("email should be verified first!");
  }

  // Check if banned
  if (user.isBanned) {
    if (!user.banUntil || new Date(user.banUntil) > new Date()) {
      throw new Error("You are banned from logging in.");
    } else {
      // Ban has expired, remove it
      user.isBanned = false;
      user.banUntil = null;
      await user.save();
    }
  }

  // Check if locked
  if (user.lockUntil && user.lockUntil > new Date()) {
    const unlockTime = new Date(user.lockUntil).toLocaleString();
    throw new Error(`Account is locked. Try again after ${unlockTime}.`);
  }

  // Validate password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);

  if (!isPasswordCorrect) {
    user.loginAttempts = (user.loginAttempts || 0) + 1;

    if (user.loginAttempts >= MAX_ATTEMPTS) {
      user.lockUntil = new Date(Date.now() + LOCK_TIME);
      await user.save();
      throw new Error(
        "Too many login attempts. Account locked for 10 minutes."
      );
    }

    await user.save();
    throw new Error("Invalid credentials!");
  }

  // Success: reset loginAttempts, lockUntil, update lastLogin
  user.loginAttempts = 0;
  user.lockUntil = null;
  user.lastLogin = new Date();

  await user.save();
  //implement refresh token
  const token = generateToken({
    email: user.email,
    id: user._id,
    role: user.role,
    fullName: user.fullName,
  });

  return {
    message: "login successful",
    token: token,
  };
};

module.exports = {
  getAll,
  getOne,
  getByEmail,
  register,
  verifyEmail,
  login,
};
