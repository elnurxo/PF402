const {
  register,
  getAll,
  getOne,
  getByEmail,
  verifyEmail,
  login,
} = require("../services/userService");
const { CLIENT_URL } = require("../config/config");
const bcrypt = require("bcrypt");
const formatMongoData = require("../utils/formatMongoData");
const { sendVerificationEmail } = require("../utils/mailService");
const { generateToken } = require("../utils/jwt");

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

    if (req.file && req.file.path) {
      req.body.profileImage = req.file.path;
      req.body.public_id = req.file.filename;
    }
    const response = await register({
      ...req.body,
      password: hashedPassword,
    });
    if (!response.success) {
      throw new Error(response.message);
    }

    //send email service ...
    const token = generateToken({
      id: response.data._id,
      email: req.body.email,
      fullName: req.body.fullName,
    });
    const verificationLink = `${process.env.SERVER_URL}/auth/verify-email?token=${token}`;
    sendVerificationEmail(req.body.email, req.body.fullName, verificationLink);

    res.status(201).json({
      message: "user registered successfully | verify your email",
      data: response.data,
    });
  } catch (error) {
    next(error);
  }
};

exports.verifyEmail = async (req, res, next) => {
  try {
    const { token } = req.query;
    //call your service here!
    const response = await verifyEmail(token); //success, message
    // res.status(200).json({
    //   message: response.message,
    //   success: response.success,
    // });
    res.redirect(`${CLIENT_URL}/email-verified?message=${response.message}`);
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const credentials = {
      email: req.body.email,
      password: req.body.password,
    };
    const response = await login(credentials);
    res.status(200).json({
      message: response.message,
      token: response.token,
    });
  } catch (error) {
    next(error);
  }
};
