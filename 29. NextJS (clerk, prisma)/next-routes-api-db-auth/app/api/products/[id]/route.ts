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
    const product = await getProductById(Number(id));

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
    const result = await deleteProductById(+id);

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
  { params }: { params: Promise<{ id: number }> }
) {
  try {
    const body = await request.json();

    // Create a clean update object with only valid fields
    const updateData: Partial<Product> = {};
    const { name, price, inStock, stockQuantity } = body;

    if (name) {
      updateData.name = name;
    }
    if (price) {
      updateData.price = price;
    }
    if (inStock) {
      updateData.inStock = inStock;
    }
    if (stockQuantity) {
      updateData.stockQuantity = stockQuantity;
    }

    // Only pass the validated fields to the update function
    const { id } = await params;
    const result = await updateProductById(+id, updateData);

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
    const { name, price, inStock, stockQuantity } = body;

    // Check if product exists first
    const { id } = await params;
    const existingProduct = await getProductById(+id);
    if (!existingProduct) {
      return NextResponse.json(
        { message: "Product not found", data: null },
        { status: 404 }
      );
    }

    // Create a new product object with all required fields
    const updatedProduct: Partial<Product> = {
      name: name.trim(),
      price: price,
      inStock: inStock,
      stockQuantity,
    };

    // Update the product with all fields
    const result = await updateProductById(+id, updatedProduct);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}
