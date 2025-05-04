/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";
import { createProductByData, updateProductById } from "@/services/productService";
import { revalidatePath } from "next/cache";

export async function createProduct(formData: FormData): Promise<void> {
  try {
    const name = formData.get("name") as string;
    const price = Number(formData.get("price"));
    const inStock = formData.get("inStock") === "on";
    const stockQuantity = Number(formData.get("stockQuantity"));
    const categoryId = Number(formData.get("category"));

    if (!name || isNaN(price) || isNaN(stockQuantity) || isNaN(categoryId)) {
      throw new Error("Invalid input data.");
    }

    await createProductByData({
      name,
      price,
      inStock,
      stockQuantity,
      categoryId,
    });

    revalidatePath("/shop");
  } catch (error) {
    console.error("Create Product Error:", error);
    throw new Error("Failed to create product.");
  }
}

export async function updateProduct(
  id: number,
  formData: FormData
): Promise<void> {
  try {
    const updateData: any = {};

    const name = (formData.get("name") as string)?.trim();
    const price = formData.get("price");
    const inStock = formData.get("inStock");
    const stockQuantity = formData.get("stockQuantity");
    const category = formData.get("category");

    if (name) updateData.name = name;
    if (price) updateData.price = Number(price);
    if (inStock !== null) updateData.inStock = inStock === "on";
    if (stockQuantity) updateData.stockQuantity = Number(stockQuantity);
    if (category) updateData.categoryId = Number(category);

    await updateProductById(id, updateData);

    revalidatePath("/shop");
  } catch (error) {
    console.error("Update Product Error:", error);
    throw new Error("Failed to update product.");
  }
}
