import { getProducts, postProduct } from "@/services/productService";
import { handleError } from "@/lib/error-handler";
import { type NextRequest, NextResponse } from "next/server";
import ProductValidationSchema from "@/app/validations/product.validation";

interface CreateProductRequest {
  name: string;
  price: number;
  inStock: boolean;
  stockQuantity: number;
}

// GET - List all products or filter by name
export async function GET(request: NextRequest) {
  try {
    const name = request.nextUrl.searchParams.get("name");
    const products = await getProducts(name);

    return NextResponse.json(
      {
        message: "Products retrieved successfully",
        data: products,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error);
  }
}

// POST - Create a new product
export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CreateProductRequest;

    //validation
    const { success, error } = ProductValidationSchema.safeParse(body);
    const errorMessage = error?.issues[0];

    if (success) {
      //validated
      const result = await postProduct(body);
      return NextResponse.json(result, { status: 201 });
    } else {
      //not validated
      return NextResponse.json(errorMessage, { status: 403 });
    }
  } catch (error) {
    return handleError(error);
  }
}
