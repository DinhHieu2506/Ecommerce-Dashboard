import React from "react";
import { Eye } from "lucide-react";

export default function OdersPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Orders Management</h2>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">OrderID</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">ProductsID</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Status</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">TotalPrice</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Created</th>
                <th className="text-center py-4 px-6 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-900">12345</td>
                <td className="py-4 px-6 text-sm text-gray-600">P-001</td>
                <td className="py-4 px-6 text-sm text-gray-900">Pending</td>
                <td className="py-4 px-6 text-sm text-gray-600">$120.00</td>
                <td className="py-4 px-6 text-sm text-gray-900">2025-07-15</td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center">
                    <button className="text-blue-600 hover:text-blue-800 p-1 cursor-pointer">
                      <Eye size={20} />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-900">12346</td>
                <td className="py-4 px-6 text-sm text-gray-600">P-002</td>
                <td className="py-4 px-6 text-sm text-gray-900">Shipped</td>
                <td className="py-4 px-6 text-sm text-gray-600">$220.00</td>
                <td className="py-4 px-6 text-sm text-gray-900">2025-07-14</td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center">
                    <button className="text-blue-600 hover:text-blue-800 p-1 cursor-pointer">
                      <Eye size={20} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
