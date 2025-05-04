/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  getProductById,
  updateProductById,
  deleteProductById,
} from "@/services/productService";
import { handleError } from "@/lib/error-handler";
import { type NextRequest, NextResponse } from "next/server";

const parseId = (params: { id: string }) => Number(params.id);

// GET product by ID
export async function GET(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseId(params);
    const product = await getProductById(id);

    if (!product) {
      return NextResponse.json(
        { message: "Product not found" },
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

// DELETE product by ID
export async function DELETE(
  _request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseId(params);
    const result = await deleteProductById(id);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}

// PATCH product by ID (partial update)
export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const id = parseId(params);

    const updateData: any = {};
    const { name, price, inStock, stockQuantity, categoryId } = body;

    if (typeof name === "string") updateData.name = name.trim();
    if (typeof price === "number") updateData.price = price;
    if (typeof inStock === "boolean") updateData.inStock = inStock;
    if (typeof stockQuantity === "number")
      updateData.stockQuantity = stockQuantity;
    if (typeof categoryId === "number") updateData.categoryId = categoryId;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { message: "No valid fields provided for update" },
        { status: 400 }
      );
    }

    const existingProduct = await getProductById(id);
    if (!existingProduct) {
      return NextResponse.json(
        { message: "Product not found" },
        { status: 404 }
      );
    }

    const result = await updateProductById(id, updateData);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}

// PUT product by ID (full replacement)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseId(params);
    const body = await request.json();

    const { name, price, inStock, stockQuantity, categoryId } = body;

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
        { message: "Product not found" },
        { status: 404 }
      );
    }

    const updateData = {
      name: name.trim(),
      price,
      inStock,
      stockQuantity,
      ...(typeof categoryId === "number" ? { categoryId } : {}),
    };

    const result = await updateProductById(id, updateData);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}
