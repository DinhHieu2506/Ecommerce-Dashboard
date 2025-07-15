import React from "react";
import { SquarePen, Trash } from "lucide-react";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Products Management
        </h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Name</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Category</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Price</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Description</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Stock</th>
                <th className="text-center py-4 px-6 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-900">Nike Air Max</td>
                <td className="py-4 px-6 text-sm text-gray-600">Sneakers</td>
                <td className="py-4 px-6 text-sm text-gray-900">$120</td>
                <td className="py-4 px-6 text-sm text-gray-600">Comfortable sports shoes</td>
                <td className="py-4 px-6 text-sm text-gray-900">15</td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center space-x-3">
                    <button className="text-blue-600 hover:text-blue-800 p-1 cursor-pointer">
                      <SquarePen size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-800 p-1 cursor-pointer">
                      <Trash size={18} />
                    </button>
                  </div>
                </td>
              </tr>

              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-900">Adidas UltraBoost</td>
                <td className="py-4 px-6 text-sm text-gray-600">Running</td>
                <td className="py-4 px-6 text-sm text-gray-900">$180</td>
                <td className="py-4 px-6 text-sm text-gray-600">High performance running shoes</td>
                <td className="py-4 px-6 text-sm text-gray-900">30</td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-center space-x-3">
                    <button className="text-blue-600 hover:text-blue-800 p-1 cursor-pointer">
                      <SquarePen size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-800 p-1 cursor-pointer">
                      <Trash size={18} />
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
