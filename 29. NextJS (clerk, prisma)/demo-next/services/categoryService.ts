import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function getCategories() {
  return prisma.categories.findMany({
    include: { products: true },
  });
}

export async function getCategoryById(id: number) {
  return prisma.categories.findUnique({
    where: { id },
    include: { products: true },
  });
}

export async function createCategory(name: string) {
  return prisma.categories.create({
    data: { name },
  });
}

export async function updateCategoryById(
  id: number,
  updateData: Partial<Prisma.CategoriesUpdateInput>
) {
  return prisma.categories.update({
    where: { id },
    data: updateData,
  });
}

export async function deleteCategoryById(id: number) {
  return prisma.categories.delete({
    where: { id },
  });
}
