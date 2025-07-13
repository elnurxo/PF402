const SliderModel = require("../models/sliderModel");
const cloudinary = require("../config/cloudinaryConfig");

const getAll = async () => await SliderModel.find();

const getOne = async (id) => await SliderModel.findById(id);

const post = async (payload) => await SliderModel.create(payload);

const update = async (id, payload) => {
  const existing = await SliderModel.findById(id);
  if (!existing) return null;

  // If a new image is uploaded, delete the old one from Cloudinary
  if (payload.public_id) {
    await cloudinary.uploader.destroy(existing.public_id);
  }

  return await SliderModel.findByIdAndUpdate(id, payload, { new: true });
};

const deleteById = async (id) => {
  const slider = await SliderModel.findById(id);
  if (!slider) return null;

  // Delete from Cloudinary
  await cloudinary.uploader.destroy(slider.public_id);

  // Delete from MongoDB
  return await SliderModel.findByIdAndDelete(id);
};

module.exports = {
  getAll,
  getOne,
  post,
  update,
  deleteById,
};
