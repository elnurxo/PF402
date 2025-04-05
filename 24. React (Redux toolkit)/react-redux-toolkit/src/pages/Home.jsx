// import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../services/redux/slices/categorySlice.js";
// import { addToBasket } from "../services/redux/slices/basketSlice.js";
const Home = () => {
  // const [products] = useState([
  //   {
  //     id: 1,
  //     imageURL:
  //       "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  //     title: "Basic Tee",
  //     price: 24.0,
  //   },
  //   {
  //     id: 2,
  //     imageURL:
  //       "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  //     title: "Shorts",
  //     price: 27.2,
  //   },
  //   {
  //     id: 3,
  //     imageURL:
  //       "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  //     title: "Basic Tee Black",
  //     price: 54.5,
  //   },
  //   {
  //     id: 4,
  //     imageURL:
  //       "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
  //     title: "Basic Tee White",
  //     price: 14.2,
  //   },
  // ]);
  // const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const {
    data: categories,
    status,
    error,
  } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  if (status === "loading") return <p>Loading...</p>;
  if (status === "failed") return <p>Error: {error}</p>;

  return (
    // <section>
    //   <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    //     <header>
    //       <h6 className="text-sm font-bold text-gray-900 sm:text-3xl">
    //         Product Collection | Basket with ReduxToolkit
    //       </h6>
    //     </header>

    //     <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    //       {products &&
    //         products.map((product) => {
    //           return (
    //             <li key={product.id}>
    //               <div className="group block overflow-hidden">
    //                 <img
    //                   src={product.imageURL}
    //                   alt={product.title}
    //                   title={product.title}
    //                   className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
    //                 />

    //                 <div className="relative bg-white pt-3">
    //                   <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
    //                     {product.title}
    //                   </h3>

    //                   <p className="mt-2">
    //                     <span className="sr-only"> Regular Price </span>

    //                     <span className="tracking-wider text-gray-900">
    //                       {" "}
    //                       £{product.price} GBP{" "}
    //                     </span>

    //                     {/* basket button */}
    //                     <button
    //                       onClick={() => {
    //                         //add to basket (Redux toolkit)
    //                         dispatch(
    //                           addToBasket({
    //                             id: product.id,
    //                             name: product.title,
    //                             price: product.price,
    //                             imageURL: product.imageURL,
    //                           })
    //                         );
    //                         enqueueSnackbar("product added to basket", {
    //                           autoHideDuration: 1000,
    //                           anchorOrigin: {
    //                             vertical: "top",
    //                             horizontal: "right",
    //                           },
    //                         });
    //                       }}
    //                       className="group relative inline-block focus:ring-3 focus:outline-hidden"
    //                     >
    //                       <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

    //                       <span className="relative inline-block border-2 border-current px-1 py-1 text-sm font-bold tracking-widest text-black uppercase">
    //                         basket
    //                       </span>
    //                     </button>
    //                   </p>
    //                 </div>
    //               </div>
    //             </li>
    //           );
    //         })}
    //     </ul>
    //   </div>
    // </section>
    <>
      <div>
        <h1>Categories:</h1>
        <ul>
          {categories &&
            categories.map((category) => {
              return <li key={category.id}>{category.title}</li>;
            })}
        </ul>
      </div>
    </>
  );
};

export default Home;
