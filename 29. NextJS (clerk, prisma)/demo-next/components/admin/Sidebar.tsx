"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Users,
  LogOut,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Orders", href: "/admin/orders", icon: Package },
  { name: "Customers", href: "/admin/customers", icon: Users },
];

export default function AdminSidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <>
      {/* Mobile sidebar toggle */}
      <button
        type="button"
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md text-gray-700 bg-white shadow-md"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar for mobile */}
      <div
        className={`fixed inset-0 z-40 transform ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden transition-transform duration-300 ease-in-out`}
      >
        <div className="relative flex flex-col w-72 h-full bg-white shadow-xl">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Code<span className="text-gray-800">Panel</span>
            </Link>
            <button
              type="button"
              className="p-2 rounded-md text-gray-500 hover:text-gray-700"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto py-4">
            <nav className="px-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center px-4 py-3 rounded-lg ${
                    isActive(item.href)
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </nav>
          </div>

          <div className="p-4 border-t">
            <Link
              href="/"
              className="flex items-center px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span>Çıxış</span>
            </Link>
          </div>
        </div>

        <div
          className="absolute inset-0 bg-gray-600 bg-opacity-50"
          onClick={() => setMobileOpen(false)}
        ></div>
      </div>

      {/* Sidebar for desktop */}
      <aside
        className={`hidden md:flex flex-col ${
          collapsed ? "w-20" : "w-64"
        } bg-white shadow-md transition-all duration-300 ease-in-out relative`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {!collapsed && (
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Code<span className="text-gray-800">Panel</span>
            </Link>
          )}
          {collapsed && (
            <Link href="/" className="text-2xl font-bold text-blue-600 mx-auto">
              C
            </Link>
          )}
          <button
            type="button"
            className="p-1 rounded-md text-gray-500 hover:text-gray-700"
            onClick={() => setCollapsed(!collapsed)}
          >
            <ChevronRight
              className={`h-5 w-5 transition-transform ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="px-2 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center ${
                  collapsed ? "justify-center" : ""
                } px-4 py-3 rounded-lg ${
                  isActive(item.href)
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <item.icon className={`h-5 w-5 ${collapsed ? "" : "mr-3"}`} />
                {!collapsed && <span>{item.name}</span>}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t">
          <Link
            href="/"
            className={`flex items-center ${
              collapsed ? "justify-center" : ""
            } px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100`}
          >
            <LogOut className={`h-5 w-5 ${collapsed ? "" : "mr-3"}`} />
            {!collapsed && <span>Log Out</span>}
          </Link>
        </div>
      </aside>
    </>
  );
}
