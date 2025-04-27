import type { Metadata } from "next";
import {
  BarChart3,
  Users,
  Package,
  DollarSign,
  TrendingUp,
  TrendingDown,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Code Market | Admin Dashboard",
  description: "Code Market admin dashboard",
};

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Today:</span>
          <span className="font-medium">{new Date().toLocaleDateString()}</span>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Total Orders</p>
              <h3 className="text-2xl font-bold">1,284</h3>
            </div>
            <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
              <Package className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500 font-medium">12%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Customers</p>
              <h3 className="text-2xl font-bold">843</h3>
            </div>
            <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500 font-medium">8%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Profit</p>
              <h3 className="text-2xl font-bold">24,500 ₼</h3>
            </div>
            <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
              <DollarSign className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
            <span className="text-green-500 font-medium">18%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">Average Order</p>
              <h3 className="text-2xl font-bold">29 ₼</h3>
            </div>
            <div className="h-12 w-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
              <BarChart3 className="h-6 w-6" />
            </div>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <TrendingDown className="h-4 w-4 text-red-500 mr-1" />
            <span className="text-red-500 font-medium">3%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Recent Orders</h2>
            <Link
              href="/admin/orders"
              className="text-blue-600 hover:underline text-sm flex items-center"
            >
              All Orders <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                {
                  id: "ORD-1234",
                  customer: "Əli Məmmədov",
                  date: "12.05.2023",
                  status: "Çatdırılıb",
                  amount: "45 ₼",
                  statusColor: "green",
                },
                {
                  id: "ORD-1233",
                  customer: "Aygün Əliyeva",
                  date: "11.05.2023",
                  status: "Yoldadır",
                  amount: "78 ₼",
                  statusColor: "blue",
                },
                {
                  id: "ORD-1232",
                  customer: "Rəşad Hüseynov",
                  date: "10.05.2023",
                  status: "Gözləmədə",
                  amount: "32 ₼",
                  statusColor: "yellow",
                },
                {
                  id: "ORD-1231",
                  customer: "Leyla Qasımova",
                  date: "09.05.2023",
                  status: "Çatdırılıb",
                  amount: "56 ₼",
                  statusColor: "green",
                },
                {
                  id: "ORD-1230",
                  customer: "Elşən Nəsirov",
                  date: "08.05.2023",
                  status: "Ləğv edilib",
                  amount: "24 ₼",
                  statusColor: "red",
                },
              ].map((order) => (
                <tr key={order.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.customer}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                        ${
                          order.statusColor === "green"
                            ? "bg-green-100 text-green-800"
                            : ""
                        }
                        ${
                          order.statusColor === "blue"
                            ? "bg-blue-100 text-blue-800"
                            : ""
                        }
                        ${
                          order.statusColor === "yellow"
                            ? "bg-yellow-100 text-yellow-800"
                            : ""
                        }
                        ${
                          order.statusColor === "red"
                            ? "bg-red-100 text-red-800"
                            : ""
                        }
                      `}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.amount}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Orders by countries</h2>
          <div className="space-y-4">
            {[
              { country: "Turkey", percentage: 45, count: 578 },
              { country: "USA", percentage: 25, count: 321 },
              { country: "China", percentage: 15, count: 192 },
              { country: "Europe", percentage: 10, count: 128 },
              { country: "Others", percentage: 5, count: 65 },
            ].map((item) => (
              <div key={item.country}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">{item.country}</span>
                  <span className="text-sm text-gray-500">
                    {item.count} order
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {[
              {
                action: "Yeni sifariş yaradıldı",
                user: "Əli Məmmədov",
                time: "15 dəqiqə əvvəl",
                icon: Package,
                iconColor: "blue",
              },
              {
                action: "Yeni müştəri qeydiyyatdan keçdi",
                user: "Nərgiz Əhmədova",
                time: "1 saat əvvəl",
                icon: Users,
                iconColor: "purple",
              },
              {
                action: "Sifariş statusu yeniləndi",
                user: "Admin",
                time: "2 saat əvvəl",
                icon: Package,
                iconColor: "green",
              },
              {
                action: "Yeni ödəniş qəbul edildi",
                user: "Rəşad Hüseynov",
                time: "3 saat əvvəl",
                icon: DollarSign,
                iconColor: "green",
              },
              {
                action: "Sifariş ləğv edildi",
                user: "Elşən Nəsirov",
                time: "5 saat əvvəl",
                icon: Package,
                iconColor: "red",
              },
            ].map((item, index) => (
              <div key={index} className="flex">
                <div
                  className={`h-8 w-8 rounded-lg flex items-center justify-center mr-3 
                  ${
                    item.iconColor === "blue" ? "bg-blue-100 text-blue-600" : ""
                  }
                  ${
                    item.iconColor === "purple"
                      ? "bg-purple-100 text-purple-600"
                      : ""
                  }
                  ${
                    item.iconColor === "green"
                      ? "bg-green-100 text-green-600"
                      : ""
                  }
                  ${item.iconColor === "red" ? "bg-red-100 text-red-600" : ""}
                `}
                >
                  <item.icon className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">{item.action}</p>
                  <div className="flex text-xs text-gray-500">
                    <span>{item.user}</span>
                    <span className="mx-1">•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
