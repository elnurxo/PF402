import instance from "@/api/axiosInstance";
import { endpoints } from "@/api/constants";
import { getProducts } from "@/api/requests/product";
import { update } from "@/features/user/userSlice";
import { Product } from "@/types/product";
import { ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { toast } from "sonner";

const Shop = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <section id="shop">
      <h3 className="text-center text-gray-700 text-2xl font-bold my-8">
        Shop List
      </h3>
      <div className="container max-w-[90%] mx-auto">
        <input
          className="border border-gray-600 px-4 py-2 rounded mb-4"
          type="text"
          placeholder="search..."
        />
        <div className=" gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {products &&
            products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="card border border-gray-400 rounded px-2 py-4"
                >
                  <img
                    className="h-[200px] object-cover w-full"
                    src={product.imageURL}
                    alt={product.title}
                  />
                  <div className="px-8">
                    <h4 className="text-center text-2xl font-bold mt-4 hover:underline cursor-pointer">
                      <Link to={`/shop/${product.id}`}>{product.title}</Link>
                    </h4>
                    <h4 className="text-center text-gray-500 text-lg font-bold mt-4">
                      Category: {product.category}
                    </h4>
                    <h6 className="text-center text-gray-500 text-md font-bold mt-4">
                      Reviews: {product.reviews.length}
                    </h6>
                    <div className="flex justify-end">
                      <button
                        onClick={async () => {
                          if (user) {
                            let updatedBasket = [...user.basketItems];
                            const isInBasket = updatedBasket.find(
                              (b) => b.productId === product.id
                            );
                            if (isInBasket) {
                              console.log(
                                "is in basket: ",
                                isInBasket.quantity
                              );
                              updatedBasket = updatedBasket.toSpliced(
                                updatedBasket.findIndex(
                                  (x) => x.productId == product.id
                                ),
                                1,
                                {
                                  ...isInBasket,
                                  quantity: isInBasket.quantity + 1,
                                }
                              );
                            } else {
                              updatedBasket = [
                                ...updatedBasket,
                                {
                                  id: Math.floor(Math.random() * 1000),
                                  productId: product.id,
                                  quantity: 1,
                                },
                              ];
                            }
                            const { data: updatedUser } = await instance.patch(
                              endpoints.users + `/${user.id}`,
                              {
                                basketItems: [...updatedBasket],
                              }
                            );
                            dispatch(update(updatedUser));
                            toast.success("mock added to basket");
                          } else {
                            toast.error("you have to login first!");
                          }
                        }}
                        className={`cursor-pointer border hover:bg-gray-700 transition hover:text-white border-gray-700 flex justify-center items-center rounded p-2 mt-2`}
                      >
                        <ShoppingCart className="hover:scale-95 transition" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Shop;
