/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Product, ProductResponse } from "@/types/product";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getProducts(name?: string | null): Promise<Product[]> {
  if (name) {
    return prisma.product.findMany({
      where: {
        name: {
          contains: name, // partial matching
          mode: "insensitive", // optional: case-insensitive search
        },
      },
    });
  }
  return prisma.product.findMany({
    include: {
      categories: true,
    },
  });
}

//additional get all categories
export async function getCategories(): Promise<any[]> {
  return prisma.categories.findMany({
    include: {
      product: true,
    },
  });
}

export async function getProductById(id: number): Promise<Product | null> {
  return prisma.product.findUnique({
    where: { id },
  });
}

export async function postProduct(
  product: any
): Promise<ProductResponse> {
  const res = await prisma.product.create({ data: product });
  return {
    message: "Product created successfully",
    data: res,
  };
}

export async function deleteProductById(id: number): Promise<ProductResponse> {
  const res = await prisma.product.delete({
    where: { id },
  });
  return {
    message: "Product deleted successfully",
    data: res,
  };
}

export async function updateProductById(
  id: number,
  updatedProduct: Prisma.ProductUpdateInput // more precise typing
): Promise<ProductResponse> {
  const res = await prisma.product.update({
    where: { id },
    data: updatedProduct,
  });
  return {
    message: "Product updated successfully",
    data: res,
  };
}
