"use client";
import { useState } from "react";
import { FaBars, FaTachometerAlt, FaPlus, FaBox } from "react-icons/fa";
import Link from "next/link";

export default function AdminSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  return (
    <div
      className={`h-screen bg-gray-800 text-white transition-all duration-300 ${
        isCollapsed ? "w-16" : "w-64"
      } flex flex-col`}
    >
      <div className="flex items-center justify-between px-4 py-4">
        {!isCollapsed && <h1 className="text-xl font-bold">Admin</h1>}
        <button onClick={toggleSidebar}>
          <FaBars />
        </button>
      </div>

      <nav className="flex flex-col gap-2 mt-4 px-2">
        <Link
          href="/admin/dashboard"
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
        >
          <FaTachometerAlt />
          {!isCollapsed && <span>Dashboard</span>}
        </Link>
        <Link
          href="/admin/add-product"
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
        >
          <FaPlus />
          {!isCollapsed && <span>Add Product</span>}
        </Link>
        <Link
          href="/admin/products"
          className="flex items-center gap-2 p-2 hover:bg-gray-700 rounded"
        >
          <FaBox />
          {!isCollapsed && <span>Products</span>}
        </Link>
      </nav>
    </div>
  );
}
