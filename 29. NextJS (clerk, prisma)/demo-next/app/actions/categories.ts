"use server";
/* eslint-disable @typescript-eslint/no-explicit-any */

import {
  updateCategoryById,
  deleteCategoryById,
} from "@/services/categoryService";
import { createProductByData } from "@/services/productService";
import { revalidatePath } from "next/cache";

// CREATE - Create a new category
export async function createProduct(formData: FormData): Promise<void> {
  try {
    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);
    const categoryId = parseInt(formData.get("categoryId") as string, 10);
    const stockQuantity = parseInt(formData.get("stockQuantity") as string, 10);
    const inStock = formData.get("inStock") === "on";  // If the checkbox is checked

    // Validate inputs (optional)
    if (!name || isNaN(price) || isNaN(categoryId) || isNaN(stockQuantity)) {
      throw new Error("Invalid input data.");
    }

    const productData = {
      name,
      price,
      categoryId,
      stockQuantity,
      inStock,
    };

    // Assuming you have a service function to create a product
    await createProductByData(productData);

    // Optionally revalidate the path to update the data in the UI
    revalidatePath("/shop");

  } catch (error) {
    console.error("Create Product Error:", error);
    throw new Error("Failed to create product.");
  }
}

// UPDATE - Update an existing category
export async function updateCategoryAction(
  id: number,
  formData: FormData
): Promise<void> {
  try {
    const updateData: any = {};
    const name = (formData.get("name") as string)?.trim();

    if (name) updateData.name = name;

    await updateCategoryById(id, updateData);
    revalidatePath("/categories");
  } catch (error) {
    console.error("Update Category Error:", error);
    throw new Error("Failed to update category.");
  }
}

// DELETE - Delete a category
export async function deleteCategoryAction(formData: FormData): Promise<void> {
  try {
    const id = Number(formData.get("id"));
    if (isNaN(id)) throw new Error("Invalid category ID");

    await deleteCategoryById(id);
    revalidatePath("/categories");
  } catch (error) {
    console.error("Delete Category Error:", error);
    throw new Error("Failed to delete category.");
  }
}
