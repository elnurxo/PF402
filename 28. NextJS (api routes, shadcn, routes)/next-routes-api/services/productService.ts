import { products } from "@/data/products";
import type { Product, ProductResponse } from "@/types/product";

export async function getProducts(name: string | null): Promise<Product[]> {
  if (name) {
    return products.filter((p) =>
      p.title.toLowerCase().trim().includes(name.toLowerCase().trim())
    );
  }
  return products;
}

export async function getProductById(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}

export async function postProduct(product: Product): Promise<ProductResponse> {
  products.push(product);
  return {
    message: "Product created successfully",
    data: product,
  };
}

export async function deleteProductById(id: string): Promise<ProductResponse> {
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) {
    return {
      message: "Product not found",
      data: null,
    };
  }

  products.splice(idx, 1);
  return {
    message: "Product deleted successfully",
    data: products,
  };
}

export async function updateProductById(
  id: string,
  updatedProduct: Partial<Product>
): Promise<ProductResponse> {
  const idx = products.findIndex((p) => p.id === id);
  if (idx === -1) {
    return {
      message: "Product not found",
      data: null,
    };
  }

  products[idx] = { ...products[idx], ...updatedProduct };
  return {
    message: "Product updated successfully",
    data: products[idx],
  };
}
