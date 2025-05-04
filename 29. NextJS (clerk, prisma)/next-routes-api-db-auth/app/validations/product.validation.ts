import { z } from "zod";

const ProductValidationSchema = z.object({
  name: z.string().min(4).max(30).trim().toLowerCase(),
  price: z.number().positive(),
  inStock: z.boolean().default(false),
  stockQuantity: z.number().positive().min(0).max(100),
});

export default ProductValidationSchema;
