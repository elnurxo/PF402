import type { ProductResponse } from "@/types/product";
import { prisma } from "@/lib/prisma";

// GET all products (with optional name filter)
export async function getProducts(name?: string | null) {
  return prisma.product.findMany({
    where: name ? { name: { contains: name, mode: "insensitive" } } : {},
    include: { category: true },
  });
}

// GET single product by ID
export async function getProductById(id: number) {
  return prisma.product.findUnique({
    where: { id },
    include: { category: true },
  });
}

// POST product with category relation (expects one categoryId)
export async function createProductByData(productData: {
  name: string;
  price: number;
  categoryId: number;
  stockQuantity: number;
  inStock: boolean;
}): Promise<void> {
  try {
    // Check if the category exists in the database before creating the product
    const category = await prisma.categories.findUnique({
      where: {
        id: productData.categoryId,
      },
    });

    if (!category) {
      throw new Error(`Category with id ${productData.categoryId} does not exist.`);
    }

    // Create the product with the category relation
    const result = await prisma.product.create({
      data: {
        name: productData.name,
        price: productData.price,
        stockQuantity: productData.stockQuantity,
        inStock: productData.inStock,
        category: {
          connect: { id: productData.categoryId }, // Connect the category
        },
      },
    });

    if (!result) {
      throw new Error("Failed to create product.");
    }
  } catch (error) {
    console.error("Error creating product:", error);
    throw error; // Rethrow the error to propagate it to the caller
  }
}



// UPDATE product (including category)
export async function updateProductById(
  id: number,
  updatedProduct: Partial<{
    name: string;
    price: number;
    inStock: boolean;
    stockQuantity: number;
    categoryId: number;
  }>
): Promise<ProductResponse> {
  const { categoryId, ...rest } = updatedProduct;

  const res = await prisma.product.update({
    where: { id },
    data: {
      ...rest,
      ...(categoryId && {
        category: {
          connect: { id: categoryId },
        },
      }),
    },
    include: { category: true },
  });

  return {
    message: "Product updated successfully",
    data: res,
  };
}

// DELETE product
export async function deleteProductById(id: number): Promise<ProductResponse> {
  const res = await prisma.product.delete({
    where: { id },
  });

  return {
    message: "Product deleted successfully",
    data: res,
  };
}
