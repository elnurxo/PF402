import type { Product, ProductResponse } from "@/types/product";
import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getProducts(name?: string | null): Promise<Product[]> {
  if (name) {
    return await prisma.product.findMany({
      where: {
        name: name,
      },
    });
  } else {
    return await prisma.product.findMany();
  }
}

export async function getProductById(id: number): Promise<Product | null> {
  return await prisma.product.findUnique({
    where: {
      id: id,
    },
  });
}

export async function postProduct(
  product: Prisma.XOR<
    Prisma.ProductCreateInput,
    Prisma.ProductUncheckedCreateInput
  >
): Promise<ProductResponse> {
  const res = await prisma.product.create({
    data: product,
  });
  return {
    message: "Product created successfully",
    data: res,
  };
}

export async function deleteProductById(id: number): Promise<ProductResponse> {
  const res = await prisma.product.delete({
    where: {
      id: id,
    },
  });
  return {
    message: "Product deleted successfully",
    data: res,
  };
}

export async function updateProductById(
  id: number,
  updatedProduct: Partial<Product>
): Promise<ProductResponse> {
  const res = await prisma.product.update({
    where: {
      id,
    },
    data: updatedProduct,
  });
  return {
    message: "Product updated successfully",
    data: res,
  };
}
