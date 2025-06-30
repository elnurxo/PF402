const UserModel = require("../models/userModel");

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
        data: await UserModel.create(payload),
        success: true,
      };
    }
  } catch (error) {
    return error.message || "internal server error!";
  }
};

//verify email service
const verifyEmail = async () => {};

module.exports = {
  getAll,
  getOne,
  getByEmail,
  register,
  verifyEmail,
};
