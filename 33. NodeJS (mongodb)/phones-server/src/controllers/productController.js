const {
  getAll,
  getOne,
  post,
  deleteOne,
  update,
} = require("../services/productService");
const formatMongoData = require("../utils/formatMongoData");

//get all products
exports.getProducts = async (_, res, next) => {
  try {
    const products = await getAll();
    res.status(200).json(formatMongoData(products));
  } catch (error) {
    next(error);
  }
};

//get one product
exports.getProductById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const product = await getOne(id);
    if (!product) throw new Error("product not found!");
    res.status(200).json(formatMongoData(product));
  } catch (error) {
    next(error);
  }
};

//post
exports.postProduct = async (req, res, next) => {
  try {
    const newProduct = await post(req.body);
    res.status(201).json(formatMongoData(newProduct));
  } catch (error) {
    next(error);
  }
};

//delete
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedProduct = await deleteOne(id);
    if (!deletedProduct) throw new Error("product not found!");
    res.status(200).json(formatMongoData(deletedProduct));
  } catch (error) {
    next(error);
  }
};

//update
exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateProd = { ...req.body };
    const updatedProductResponse = await update(id, updateProd);
    if (!updatedProductResponse) throw new Error("product not found!");
    res.status(200).json(formatMongoData(updatedProductResponse));
  } catch (error) {
    next(error);
  }
};
