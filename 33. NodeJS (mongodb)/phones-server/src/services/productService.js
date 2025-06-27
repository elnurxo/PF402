const ProductModel = require("../models/productModel");

const getAll = async () => await ProductModel.find();

const getOne = async (id) => await ProductModel.findById(id);

const post = async (payload) => await ProductModel.create(payload);

const deleteOne = async (id) => await ProductModel.findByIdAndDelete(id);

const update = async (id, payload) =>
  await ProductModel.findByIdAndUpdate(id, payload, { new: true });

module.exports = {
  getAll,
  getOne,
  post,
  deleteOne,
  update,
};
