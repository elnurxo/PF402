const OrderModel = require("../models/orderModel");
const ProductModel = require("../models/productModel");

//for admin use
const getAll = async () =>
  await OrderModel.find().populate("products").populate("user", "email");

const getOne = async (id) =>
  await OrderModel.findById(id).populate("products").populate("user", "email");

const getCustomerOrders = async (userId) => {
  const userOrders = await OrderModel.find({ user: userId }).populate(
    "products"
  );

  return userOrders;
};

const getVendorOrders = async (vendorId) => {
  // Step 1: Get product IDs for this vendor
  const vendorProducts = await ProductModel.find({ vendor: vendorId }).select(
    "_id"
  );
  const vendorProductIds = vendorProducts.map((product) => product._id);

  // Step 2: Find orders that contain at least one of these products
  const vendorOrders = await OrderModel.find({
    "products.product": { $in: vendorProductIds },
  })
    .populate("user", "fullName email") // optional: populate user info
    .populate("products.product", "name price") // optional: populate product info
    .sort({ createdAt: -1 });

  return vendorOrders;
};

const post = async (payload) => await OrderModel.create(payload);

const deleteOne = async (id) => await OrderModel.findByIdAndDelete(id);

const update = async (orderId, payload, vendorId) => {
  try {
    const { productId, status } = payload;

    // 1. Check if product belongs to vendor
    const product = await ProductModel.findOne({
      _id: productId,
      vendor: vendorId,
    });
    if (!product) {
      throw new Error("Unauthorized: Product does not belong to this vendor.");
    }

    // 2. Update specific product's status inside the order
    const order = await OrderModel.findOneAndUpdate(
      {
        _id: orderId,
        "products.product": productId, // match product inside array
      },
      {
        $set: { "products.$.status": status },
      },
      { new: true }
    )
      .populate("user", "fullname email") // optional
      .populate("products.product", "name") // optional
      .lean();

    if (!order) {
      throw new Error("Order or product not found.");
    }

    return order;
  } catch (error) {
    console.error("Update failed:", error.message);
    throw error;
  }
};

module.exports = {
  getAll,
  getOne,
  post,
  deleteOne,
  update,
  getCustomerOrders,
  getVendorOrders,
};
