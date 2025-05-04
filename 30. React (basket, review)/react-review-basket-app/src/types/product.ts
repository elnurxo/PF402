import { SingleReview } from "./review";

export type Product = {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
  imageURL: string;
  reviews: SingleReview[];
};
