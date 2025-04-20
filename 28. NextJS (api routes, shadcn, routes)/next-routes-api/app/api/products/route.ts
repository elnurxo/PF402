import { getProducts, postProduct } from "@/services/productService";
import { handleError } from "@/lib/error-handler";
import { type NextRequest, NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";

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
    const { title, price } = body;

    // Validation
    if (!title || title.trim() === "") {
      return NextResponse.json(
        { message: "Title is required" },
        { status: 400 }
      );
    }

    if (typeof price !== "number" || price <= 0) {
      return NextResponse.json(
        { message: "Price must be a positive number" },
        { status: 400 }
      );
    }

    const result = await postProduct({
      id: uuidv4(),
      title,
      price,
    });

    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return handleError(error);
  }
}
