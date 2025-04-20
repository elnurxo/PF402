import {
  getProductById,
  updateProductById,
  deleteProductById,
} from "@/services/productService";
import { handleError } from "@/lib/error-handler";
import { type NextRequest, NextResponse } from "next/server";
import { Product } from "@/types/product";

// GET - Retrieve a product by ID
export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const product = await getProductById(id);

    if (!product) {
      return NextResponse.json(
        { message: "Product not found", data: null },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Product retrieved successfully", data: product },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error);
  }
}

// DELETE - Remove a product by ID
export async function DELETE(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const result = await deleteProductById(id);

    if (!result.data) {
      return NextResponse.json(result, { status: 404 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}

// PATCH - Update a product by ID (partial update)
export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();

    // Create a clean update object with only valid fields
    const updateData: Partial<Product> = {};

    // Validate and add title if provided
    if ("title" in body) {
      if (typeof body.title !== "string" || body.title.trim() === "") {
        return NextResponse.json(
          { message: "Title cannot be empty" },
          { status: 400 }
        );
      }
      updateData.title = body.title.trim();
    }

    // Validate and add price if provided
    if ("price" in body) {
      if (typeof body.price !== "number" || body.price <= 0) {
        return NextResponse.json(
          { message: "Price must be a positive number" },
          { status: 400 }
        );
      }
      updateData.price = body.price;
    }

    // Check if any valid fields were provided
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { message: "No valid fields provided for update" },
        { status: 400 }
      );
    }

    // Only pass the validated fields to the update function
    const { id } = await params;
    const result = await updateProductById(id, updateData);

    if (!result.data) {
      return NextResponse.json(result, { status: 404 });
    }

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}

// PUT - Replace a product by ID (full update)
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json();
    const { title, price } = body;

    // For PUT, all fields are required
    if (!title || typeof title !== "string" || title.trim() === "") {
      return NextResponse.json(
        { message: "Title is required and cannot be empty" },
        { status: 400 }
      );
    }

    if (price === undefined || typeof price !== "number" || price <= 0) {
      return NextResponse.json(
        { message: "Price is required and must be a positive number" },
        { status: 400 }
      );
    }

    // Check if product exists first
    const { id } = await params;
    const existingProduct = await getProductById(id);
    if (!existingProduct) {
      return NextResponse.json(
        { message: "Product not found", data: null },
        { status: 404 }
      );
    }

    // Create a new product object with all required fields
    const updatedProduct: Omit<Product, "id"> = {
      title: title.trim(),
      price: price,
    };

    // Update the product with all fields
    const result = await updateProductById(id, updatedProduct);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}
