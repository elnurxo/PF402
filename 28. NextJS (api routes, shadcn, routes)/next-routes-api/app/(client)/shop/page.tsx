import { Button } from "@/components/ui/button";
import { Product } from "@/types/product";
import Link from "next/link";

//SERVER COMPONENT
export default async function Shop() {
  const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL ?? ""}/api/products`;
  const response = await fetch(API_URL, {
    cache: "no-cache",
    next: {
      revalidate: 60,
    },
  });
  const { data: products } = await response.json();
  return (
    <>
      <h1 className=" mt-4.5 text-center text-4xl text-gray-800 dark:text-white">
        Shop Page!
      </h1>
      <ul className="w-[25%] text-center space-y-1.5 my-2 mx-auto border p-3">
        {products &&
          products.map((product: Product) => {
            return (
              <li key={product.id}>
                {product.title} | <i>{product.price}</i>
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
