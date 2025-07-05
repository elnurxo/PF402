const Joi = require("joi");

const categoryValidationSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  description: Joi.string().min(10).max(500).required(),
});

module.exports = categoryValidationSchema;
