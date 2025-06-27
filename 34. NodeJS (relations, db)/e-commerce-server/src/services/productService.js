const ProductModel = require("../models/productModel");

const getAll = async ({ page, limit, sortBy, order, filter }) =>
  await ProductModel.find(filter)
    .sort({ [sortBy]: order })
    .skip((page - 1) * limit)
    .limit(limit)
    .populate("category")
    .lean();

const getOne = async (id) =>
  await ProductModel.findById(id).populate("category");

const getTotalCount = async () => await ProductModel.countDocuments();

const post = async (payload) => await ProductModel.create(payload);

const deleteOne = async (id) => await ProductModel.findByIdAndDelete(id);

const deleteMany = async (categoryId) =>
  await ProductModel.deleteMany({ category: categoryId });

const update = async (id, payload) =>
  await ProductModel.findByIdAndUpdate(id, payload, { new: true });

module.exports = {
  getAll,
  getOne,
  post,
  deleteOne,
  update,
  deleteMany,
  getTotalCount,
};
