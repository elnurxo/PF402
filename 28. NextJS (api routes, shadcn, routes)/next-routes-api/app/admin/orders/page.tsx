import { Plus } from "lucide-react";

export default function Orders() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Orders</h1>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition-all shadow">
              <Plus />
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow overflow-x-auto">
            <table className="min-w-full text-sm text-gray-700">
              <thead className="bg-gray-100 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium">#00123</td>
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">Apr 20, 2025</td>
                  <td className="px-6 py-4">
                    <select className="bg-gray-100 text-sm px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option value="Pending">Pending</option>
                      <option value="Processing">Processing</option>
                      <option value="Completed" selected>
                        Completed
                      </option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="px-6 py-4">$125.00</td>
                  <td className="px-6 py-4 space-x-2">
                    <button className="text-indigo-600 hover:underline text-sm">
                      Edit
                    </button>
                    <button className="text-red-600 hover:underline text-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
