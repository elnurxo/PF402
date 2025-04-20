export interface Product {
  id: string;
  title: string;
  price: number;
}

export interface ProductResponse {
  message: string;
  data: Product | Product[] | null;
}

export interface ErrorResponse {
  message: string;
}
