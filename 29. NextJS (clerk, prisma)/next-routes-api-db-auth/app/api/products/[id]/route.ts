import {
  getProductById,
  updateProductById,
  deleteProductById,
} from "@/services/productService";
import { handleError } from "@/lib/error-handler";
import { type NextRequest, NextResponse } from "next/server";
import { Product } from "@/types/product";

// Utility to safely parse id
const parseId = (params: { id: string }) => Number(params.id);

// GET - Retrieve a product by ID
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseId(params);
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
  { params }: { params: { id: string } }
) {
  try {
    const id = parseId(params);
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
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const id = parseId(params);

    const updateData: Partial<Product> = {};
    const { name, price, inStock, stockQuantity } = body;

    if (typeof name === "string") updateData.name = name.trim();
    if (typeof price === "number") updateData.price = price;
    if (typeof inStock === "boolean") updateData.inStock = inStock;
    if (typeof stockQuantity === "number")
      updateData.stockQuantity = stockQuantity;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { message: "No valid fields provided for update" },
        { status: 400 }
      );
    }

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
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const id = parseId(params);

    const { name, price, inStock, stockQuantity } = body;

    // Validate presence of all required fields
    if (
      typeof name !== "string" ||
      typeof price !== "number" ||
      typeof inStock !== "boolean" ||
      typeof stockQuantity !== "number"
    ) {
      return NextResponse.json(
        { message: "Missing or invalid fields for product replacement" },
        { status: 400 }
      );
    }

    const existingProduct = await getProductById(id);
    if (!existingProduct) {
      return NextResponse.json(
        { message: "Product not found", data: null },
        { status: 404 }
      );
    }

    const updatedProduct: Partial<Product> = {
      id,
      name: name.trim(),
      price,
      inStock,
      stockQuantity,
    };

    const result = await updateProductById(id, updatedProduct);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}
