export interface Product {
  id: number;
  name: string;
  price: number;
  inStock: boolean;
  stockQuantity: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductResponse {
  message: string;
  data: Product | Product[] | null;
}

export interface ErrorResponse {
  message: string;
}
