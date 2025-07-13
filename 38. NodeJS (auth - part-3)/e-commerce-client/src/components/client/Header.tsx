import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full shadow-md bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6 flex items-center justify-between">
        {/* Left: Logo */}
        <h1 className="text-2xl font-bold text-gray-800 tracking-tight">
          Bazaar
        </h1>

        {/* Right: Navigation */}
        <nav className="flex items-center space-x-6 text-gray-700 text-sm font-medium">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:text-blue-600"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:text-blue-600"
            }
          >
            Shop
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:text-blue-600"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:text-blue-600"
            }
          >
            Contact
          </NavLink>

          {/* Divider */}
          <div className="w-px h-5 bg-gray-300"></div>

          {/* Auth Links */}
          <NavLink
            to="/auth/login"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:text-blue-600"
            }
          >
            Login
          </NavLink>
          <NavLink
            to="/auth/register"
            className={({ isActive }) =>
              isActive ? "text-blue-600 underline" : "hover:text-blue-600"
            }
          >
            Register
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
