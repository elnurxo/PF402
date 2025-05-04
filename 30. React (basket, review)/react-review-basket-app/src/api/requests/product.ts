import { Product } from "@/types/product";
import instance from "../axiosInstance";
import { endpoints } from "../constants";
import { SingleReview } from "@/types/review";

export async function getProducts(): Promise<Product[] | null> {
  const { data: products } = await instance.get(endpoints.products);
  return products;
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data: product } = await instance.get(endpoints.products + `/${id}`);
  return product;
}

export async function addReview(id: string, fullName: string, comment: string) {
  const product = await getProductById(id);
  let reviews: SingleReview[] | [] = [];
  if (product) {
    reviews = [...product.reviews];
  }
  const response = await instance.patch(endpoints.products + `/${id}`, {
    reviews: [
      ...reviews,
      {
        id: String(Math.floor(Math.random() * 1000)),
        fullName: fullName,
        comment: comment,
      },
    ],
  });

  return response;
}
