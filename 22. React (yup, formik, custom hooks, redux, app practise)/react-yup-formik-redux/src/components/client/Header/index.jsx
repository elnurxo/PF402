import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../services/context/AuthContext";

const ClientHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user, logout } = useAuth();
  return (
    <>
      <header
        className="bg-white h-[70px]"
        style={{ boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px" }}
      >
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-18 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <Link className="block text-teal-600" to={"/"}>
                <span className="sr-only">Home</span>
                <img
                  width={80}
                  src="https://1000logos.net/wp-content/uploads/2020/10/Avis-Logo.png"
                  alt="car rental"
                />
              </Link>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <Link
                      to={"/"}
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={"/cars"}
                      className="text-gray-500 transition hover:text-gray-500/75"
                    >
                      Cars
                    </Link>
                  </li>
                  {user == null && (
                    <>
                      <li>
                        <Link
                          to={"/login"}
                          className="text-gray-500 transition hover:text-gray-500/75"
                        >
                          Login
                        </Link>
                      </li>
                      <li>
                        <Link
                          to={"/register"}
                          className="text-gray-500 transition hover:text-gray-500/75"
                        >
                          Register
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </nav>

              <div className="hidden md:relative md:block">
                {user && (
                  <>
                    <button
                      onClick={() => setToggleMenu(!toggleMenu)}
                      type="button"
                      className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                    >
                      <span className="sr-only">Toggle dashboard menu</span>

                      <img
                        src={user.profileImage}
                        alt={user.name}
                        title={user.name}
                        className="size-10 object-cover"
                      />
                    </button>

                    <div
                      className={`cursor-pointer absolute end-0 z-10 mt-0.5 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg ${
                        toggleMenu ? "" : "hidden"
                      }`}
                      role="menu"
                    >
                      <div className="p-2">
                        <Link
                          to={"/user"}
                          className="block rounded-lg px-4 py-2 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
                          role="menuitem"
                        >
                          My profile
                        </Link>
                      </div>

                      <div className="p-2">
                        <form method="POST" action="#">
                          <button
                            onClick={() => {
                              logout();
                            }}
                            type="submit"
                            className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                            role="menuitem"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-4"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
                              />
                            </svg>
                            Logout
                          </button>
                        </form>
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div className="block md:hidden">
                <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default ClientHeader;
