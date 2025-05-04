"use server";

import {
  postProduct,
  updateProductById,
  deleteProductById,
} from "@/services/productService";
import { revalidatePath } from "next/cache";
import { Product } from "@/types/product";

// CREATE - Create a new product
export async function createProduct(formData: FormData): Promise<void> {
  try {
    const name = (formData.get("name") as string)?.trim();
    const price = Number(formData.get("price"));
    const inStock = formData.get("inStock") === "on";
    const stockQuantity = Number(formData.get("stockQuantity"));
    const categories = formData.get("categories");

    if (!name || isNaN(price) || isNaN(stockQuantity)) {
      throw new Error("Invalid input data.");
    }

    await postProduct({
      name,
      price,
      inStock,
      stockQuantity,
      categories: [categories],
    });

    revalidatePath("/shop");
  } catch (error) {
    console.error("Create Product Error:", error);
    throw new Error("Failed to create product.");
  }
}

// UPDATE - Update an existing product
export async function updateProduct(
  id: number,
  formData: FormData
): Promise<void> {
  try {
    const updateData: Partial<Product> = {};

    const name = (formData.get("name") as string)?.trim();
    const price = formData.get("price");
    const inStock = formData.get("inStock");
    const stockQuantity = formData.get("stockQuantity");

    if (name) updateData.name = name;
    if (price) updateData.price = Number(price);
    if (stockQuantity) updateData.stockQuantity = Number(stockQuantity);
    if (inStock !== null) updateData.inStock = inStock === "on";

    await updateProductById(id, updateData);

    revalidatePath("/shop");
  } catch (error) {
    console.error("Update Product Error:", error);
    throw new Error("Failed to update product.");
  }
}

// DELETE - Delete a product
export async function deleteProduct(id: number): Promise<void> {
  try {
    await deleteProductById(id);

    revalidatePath("/shop");
  } catch (error) {
    console.error("Delete Product Error:", error);
    throw new Error("Failed to delete product.");
  }
}
