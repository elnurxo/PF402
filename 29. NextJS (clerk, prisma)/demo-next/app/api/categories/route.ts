import { getCategories, createCategory } from "@/services/categoryService";
import { handleError } from "@/lib/error-handler";
import { type NextRequest, NextResponse } from "next/server";

// GET - Retrieve all categories or filter by name
export async function GET() {
  try {
    const categories = await getCategories();

    return NextResponse.json(
      {
        message: "Categories retrieved successfully",
        data: categories,
      },
      { status: 200 }
    );
  } catch (error) {
    return handleError(error);
  }
}

// POST - Create a new category
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name } = body;

    if (!name || typeof name !== "string") {
      return NextResponse.json(
        { message: "Invalid category name" },
        { status: 400 }
      );
    }

    const result = await createCategory(name);
    return NextResponse.json(result, { status: 201 });
  } catch (error) {
    return handleError(error);
  }
}
