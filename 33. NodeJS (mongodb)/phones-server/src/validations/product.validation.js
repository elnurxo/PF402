const Joi = require("joi");

const productValidationSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  description: Joi.string().min(10).max(500).required(),
  costPrice: Joi.number().positive().min(0).required(),
  salePrice: Joi.number().positive().min(Joi.ref("costPrice")).required(),
  discountPercentage: Joi.number().min(0).max(100).required(),
  stockQuantity: Joi.number()
    .integer()
    .min(2, "stock quantity should be at least 2")
    .max(1000)
    .required(),
  comments: Joi.array().default([]),
});

module.exports = productValidationSchema;
