const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
const products = require("./data.js");

app.get("/", (_, res) => {
  res.send("Welcome to our API!");
});

//CRUD - Create Read Update Delete (Products)

//get all (pagination +, sorting)
app.get("/products", (req, res) => {
  const { name, page = 1, limit = 10 } = req.query;

  try {
    if (name) {
      return res.status(200).json({
        message: "products retrieved successfully!",
        data: products.filter((p) =>
          p.name.toLowerCase().trim().includes(name.toLowerCase().trim())
        ),
      });
    } else {
      return res.status(200).json({
        message: "products retrieved successfully!",
        total: products.length,
        currentPage: page,
        data: products.slice(page * limit - limit, page * limit),
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "internal server error",
      data: null,
    });
  }
});

//get by id
app.get("/products/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id == id);
  try {
    if (product) {
      res.status(200).json({
        message: "product retrieved successfully",
        data: product,
      });
    } else {
      res.status(404).json({
        message: "product not found with given id",
        data: null,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error.message || "internal server error",
    });
  }
});

// POST, PUT, PATCH, DELETE

app.listen(PORT, () => {
  console.log(`Server app listening on port ${PORT}`);
});
