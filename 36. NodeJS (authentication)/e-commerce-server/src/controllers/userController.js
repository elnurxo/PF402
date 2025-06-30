const {
  register,
  getAll,
  getOne,
  getByEmail,
} = require("../services/userService");
const bcrypt = require("bcrypt");
const formatMongoData = require("../utils/formatMongoData");
const { sendVerificationEmail } = require("../utils/mailService");

exports.getAllUsers = async (_, res, next) => {
  try {
    const users = await getAll();
    res.status(200).json({
      message: "users retrieved successfully!",
      data: formatMongoData(users),
    });
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getOne(id);
    if (!user) {
      res.status(404).json({
        message: "no such user found!",
        data: null,
      });
    } else {
      res.status(200).json({
        message: "user retrieved successfully!",
        data: user,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.getUserByEmail = async (req, res, next) => {
  try {
    const { email } = req.params;
    const user = await getByEmail(email);
    if (!user) {
      res.status(404).json({
        message: "no such user with given email",
        data: null,
      });
    } else {
      res.status(200).json({
        message: "user retrieved successfully!",
        data: user,
      });
    }
  } catch (error) {
    next(error);
  }
};

exports.registerUser = async (req, res, next) => {
  try {
    //password hash
    const { password } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const response = await register({
      ...req.body,
      password: hashedPassword,
    });
    if (!response.success) {
      throw new Error(response.message);
    }

    //send email service ...
    const token = "test";
    const verificationLink = `${process.env.SERVER_URL}/auth/verify-email?token=${token}`;
    sendVerificationEmail(req.body.email, req.body.fullName, verificationLink);

    res.status(201).json({
      message: "user registered successfully | verify your email",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};
