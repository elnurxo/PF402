const express = require("express");
const {
  getProducts,
  getProductById,
  postProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const logger = require("../middlewares/logger");
const validateProduct = require("../middlewares/productValidate");
const router = express.Router();

router.get("/", logger, getProducts);
router.get("/:id", getProductById);
router.post("/", validateProduct, postProduct);
router.delete("/:id", deleteProduct);
router.patch("/:id", updateProduct);

module.exports = router;
