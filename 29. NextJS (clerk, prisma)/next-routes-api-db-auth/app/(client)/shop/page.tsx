import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createUser } from "@/app/actions/products";
import { getProducts } from "@/services/productService";
//SERVER COMPONENT
export default async function Shop() {
  const products = await getProducts();
  return (
    <>
      <h1 className=" mt-4.5 text-center text-4xl text-gray-800 dark:text-white">
        Shop Page!
      </h1>
      <hr />
      {/* give form with tailwind css for product with name, price, stockQuantity and inStock fields */}
      <form
        action={createUser}
        className="flex flex-col items-center justify-center space-y-2.5 my-2 mx-auto border p-3 w-[25%]"
      >
        <div className="flex gap-2">
          <div>
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="border rounded p-1 w-full"
            />
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              className="border rounded p-1 w-full"
            />
          </div>
        </div>
        <label htmlFor="stockQuantity">Stock Quantity</label>
        <input
          type="number"
          id="stockQuantity"
          name="stockQuantity"
          className="border rounded p-1 w-full"
        />
        <div className="flex justify-center gap-4">
          <label htmlFor="inStock">In Stock</label>
          <input
            type="checkbox"
            id="inStock"
            name="inStock"
            className="border rounded p-1 w-full"
          />
        </div>
        <button
          className="bg-blue-500 rounded px-4 py-2 text-white cursor-pointer hover:shadow"
          type="submit"
        >
          add
        </button>
      </form>
      <hr className="border-red-400 my-4" />

      <ul className="w-[25%] text-center space-y-1.5 my-2 mx-auto border p-3">
        {products &&
          products.map((product) => {
            return (
              <li key={product.id}>
                {product.name} | <i>{product.price}</i>
              </li>
            );
          })}
      </ul>
      <hr />
      <Button variant={"outline"} className="block mx-auto mt-2.5">
        <Link href={"/auth/login"}>Start Shopping!</Link>
      </Button>
    </>
  );
}
