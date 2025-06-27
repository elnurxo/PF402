const express = require("express");
const {
  getProducts,
  getProductById,
  postProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const uploadMiddleware = require("../middlewares/uploadMiddleware");
const logger = require("../middlewares/logger");
const validateProduct = require("../middlewares/validations/productValidate");
const router = express.Router();

const upload = uploadMiddleware("productImages");

router.get("/", logger, getProducts);
router.get("/:id", getProductById);
router.post("/", validateProduct, (req, res, next) => {
  upload.single("image")(req, res, function (err) {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ message: "File size exceeds 5MB limit" });
      }
      if (err.code === "INVALID_FILE_TYPE") {
        return res.status(400).json({ message: "Invalid file format" });
      }
      return res.status(400).json({ message: err.message });
    }
    postProduct(req, res, next);
  });
});
router.delete("/:id", deleteProduct);
router.patch("/:id", (req, res, next) => {
  upload.single("image")(req, res, function (err) {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).json({ message: "File size exceeds 5MB limit" });
      }
      if (err.code === "INVALID_FILE_TYPE") {
        return res.status(400).json({ message: "Invalid file format" });
      }
      return res.status(400).json({ message: err.message });
    }
    updateProduct(req, res, next);
  });
});

module.exports = router;
