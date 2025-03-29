import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <>
      <section className="bg-gray-50">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Start Renting Your Car.
              <strong className="font-extrabold text-red-700 sm:block">
                {" "}
                Get Start to Drive...{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
              illo tenetur fuga ducimus numquam ea!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded-sm bg-red-600 px-12 py-3 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                to={"/register"}
              >
                Get Started
              </Link>

              <Link
                className="block w-full rounded-sm px-12 py-3 text-sm font-medium text-red-600 shadow-sm hover:text-red-700 focus:ring-3 focus:outline-hidden sm:w-auto"
                to={"/cars"}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
