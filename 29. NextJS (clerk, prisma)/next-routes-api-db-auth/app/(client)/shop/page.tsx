import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createProduct } from "@/app/actions/products";
import { getProducts } from "@/services/productService";

// SERVER COMPONENT
export default async function Shop() {
  const products = await getProducts();

  return (
    <main className="container mx-auto py-8">
      <h1 className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-6">
        Shop Page
      </h1>

      {/* Product Form */}
      <section className="w-full max-w-md mx-auto mb-10 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Add a Product
        </h2>
        <form action={createProduct} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium">
              Product Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="price" className="text-sm font-medium">
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="stockQuantity" className="text-sm font-medium">
              Stock Quantity
            </label>
            <input
              type="number"
              id="stockQuantity"
              name="stockQuantity"
              required
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="inStock"
              name="inStock"
              className="w-5 h-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="inStock" className="text-sm font-medium">
              In Stock
            </label>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white rounded px-4 py-2 hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </section>

      {/* Product List */}
      <section className="w-full max-w-md mx-auto mb-10 p-6 border rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">Products</h2>
        {products.length > 0 ? (
          <ul className="space-y-3">
            {products.map((product) => (
              <li
                key={product.id}
                className="flex justify-between border-b pb-2 text-gray-700 dark:text-gray-300"
              >
                <span>{product.name}</span>
                <span>${product.price}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-500">No products found.</p>
        )}
      </section>

      {/* Footer */}
      <div className="flex justify-center">
        <Button variant="outline" asChild>
          <Link href="/auth/login">Start Shopping!</Link>
        </Button>
      </div>
    </main>
  );
}
