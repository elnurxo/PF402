import { getProducts, createProductByData } from "@/services/productService";
import { handleError } from "@/lib/error-handler";
import { type NextRequest, NextResponse } from "next/server";
import ProductValidationSchema from "@/app/validations/product.validation";

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
    const body = await request.json();

    const { success, error } = ProductValidationSchema.safeParse(body);
    if (!success) {
      return NextResponse.json(error.issues[0], { status: 400 });
    }

    const categoryId = body.categories?.[0]; // Assuming first category for now
    if (!categoryId) {
      return NextResponse.json(
        { message: "At least one category must be provided." },
        { status: 400 }
      );
    }

    await createProductByData({
      name: body.name,
      price: body.price,
      inStock: body.inStock,
      stockQuantity: body.stockQuantity,
      categoryId,
    });

    return NextResponse.json(
      { message: "Product created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return handleError(error);
  }
}
