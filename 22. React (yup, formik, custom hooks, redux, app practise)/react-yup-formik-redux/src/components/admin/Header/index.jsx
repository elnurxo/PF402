import React from "react";
import { NavLink } from "react-router-dom";
import { Home, Calendar, Car, Users, LogOut } from "lucide-react";

const AdminHeader = () => {
  const menuItems = [
    { name: "Dashboard", icon: <Home />, path: "/admin/dashboard" },
    { name: "Bookings", icon: <Calendar />, path: "/admin/bookings" },
    { name: "Vehicles", icon: <Car />, path: "/admin/vehicles" },
    { name: "Users", icon: <Users />, path: "/admin/users" },
    { name: "Logout", icon: <LogOut />, path: "/logout" },
  ];

  return (
    <div className="fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col z-50">
      {/* Logo Section */}
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        <span className="text-indigo-500">Car</span>Rental Admin
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center p-3 mx-2 rounded-lg transition-all duration-300 hover:bg-gray-700 hover:text-indigo-400 ${
                    isActive ? "bg-gray-700 text-indigo-400" : ""
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Section */}
      <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
        &copy; 2025 CarRental. All rights reserved.
      </div>
    </div>
  );
};

export default AdminHeader;