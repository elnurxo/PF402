import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { logoutUser } from "../../features/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "en");
  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  const changeLang = (lng: string) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: RootState) => state.user);
  console.log("user: ", user);

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    setShowLogoutModal(false);
    navigate("/auth/login");
  };

  return (
    <>
      <header className="w-full shadow-md bg-white z-10 relative">
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
              {t("home")}
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "hover:text-blue-600"
              }
            >
              {t("shop")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "hover:text-blue-600"
              }
            >
              {t("about")}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-600 underline" : "hover:text-blue-600"
              }
            >
              {t("contact")}
            </NavLink>

            <div className="w-px h-5 bg-gray-300"></div>

            {/* Conditional UI based on login */}
            {user.isAuthenticated ? (
              <>
                {user.role === "admin" && (
                  <NavLink
                    to="/admin"
                    className={({ isActive }) =>
                      isActive
                        ? "text-yellow-600 underline"
                        : "hover:text-yellow-600"
                    }
                  >
                    Dashboard
                  </NavLink>
                )}
                <div className="flex items-center space-x-2">
                  <img
                    src={user?.profileImage}
                    alt="profile"
                    title={user.email}
                    className={`w-9 h-9 rounded-full object-cover border-2 ${
                      user.role === "admin"
                        ? "border-yellow-400"
                        : "border-gray-300"
                    }`}
                  />
                  <span className="text-sm">{user.fullName}</span>
                </div>
                <button
                  onClick={() => setShowLogoutModal(true)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
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
              </>
            )}

            <select
              value={lang}
              onChange={(e) => changeLang(e.target.value)}
              name="language"
              id="language"
              className="bg-white border border-gray-300 rounded-md px-3 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
            >
              <option value="az">az</option>
              <option value="ru">ru</option>
              <option value="en">en</option>
            </select>
          </nav>
        </div>
      </header>
      {/* Modal */}
      {showLogoutModal && (
        <div className="absolute inset-0 bg-black bg-opacity-40 flex h-full justify-center items-center z-20">
          <div className="bg-white p-6 rounded-lg shadow-md w-[300px]">
            <h2 className="text-lg font-semibold mb-4 text-center">
              Confirm Logout
            </h2>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Are you sure you want to log out?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600"
              >
                Logout
              </button>
              <button
                onClick={() => setShowLogoutModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-1.5 rounded hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
