const ReviewModel = require("../models/reviewModel");

//for admin use
const getAll = async () =>
  await ReviewModel.find().populate("user").populate("product", "name");

const getTotalReviewCount = async () => {
  await ReviewModel.countDocuments();
};

const getOne = async (id) =>
  await ReviewModel.findById(id).populate("user").populate("product");

const post = async (payload) => await ReviewModel.create(payload);

const deleteOne = async (id) => await ReviewModel.findByIdAndDelete(id);

module.exports = {
  getAll,
  getOne,
  post,
  deleteOne,
  getTotalReviewCount,
};
