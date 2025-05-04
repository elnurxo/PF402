import {
  getCategories,
  updateCategoryById,
  deleteCategoryById,
} from "@/services/categoryService";
import { handleError } from "@/lib/error-handler";
import { type NextRequest, NextResponse } from "next/server";

// Utility to safely parse id
const parseId = (params: { id: string }) => Number(params.id);

// PUT - Replace category by ID (full update)
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const id = parseId(params);
    const { name } = body;

    // Validate presence of required field 'name'
    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { message: "Missing or invalid category name" },
        { status: 400 }
      );
    }

    const existingCategory = await getCategories().then((categories) =>
      categories.find((category) => category.id === id)
    );

    if (!existingCategory) {
      return NextResponse.json(
        { message: "Category not found", data: null },
        { status: 404 }
      );
    }

    const updatedCategory = { id, name };
    const result = await updateCategoryById(id, updatedCategory);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return handleError(error);
  }
}

// DELETE - Remove a category by ID
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseId(params);
    const result = await deleteCategoryById(id);

    if (!result) {
      return NextResponse.json(
        { message: "Category not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Category deleted successfully", data: result },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error);
  }
}
