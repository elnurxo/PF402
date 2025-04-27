"use server";
import { postProduct } from "@/services/productService";
import { revalidatePath } from "next/cache";

//SERVER ACTIONS (POST, UPDATE, DELETE)
export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const price = Number(formData.get("price"));
  const inStock = Boolean(formData.get("inStock"));
  const stockQuantity = Number(formData.get("stockQuantity"));

  const postedProduct = await postProduct({
    name,
    price,
    inStock,
    stockQuantity,
  });

  revalidatePath("/shop");
  return postedProduct.data;
}

