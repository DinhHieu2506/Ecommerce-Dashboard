import React from 'react';
import { SquarePen, Trash, Search } from 'lucide-react';

export default function UsersPage() {
  return (
    <div className="max-w-7xl mx-auto px-8 py-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Users Management</h2>
      
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
        <div className="relative w-full md:w-1/2">
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search by name or email..."
            className="pl-10 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <select
          className="w-full md:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Roles</option>
          <option value="admin">Admin</option>
          <option value="customer">Customer</option>
        </select>
      </div>

      <div className="bg-white rounded-lg shadow">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Name</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Email</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Role</th>
                <th className="text-left py-4 px-6 text-sm font-medium text-gray-600">Created</th>
                <th className="text-center py-4 px-4 text-sm font-medium text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-6 text-sm text-gray-900">John Doe</td>
                <td className="py-4 px-6 text-sm text-gray-600">john@example.com</td>
                <td className="py-4 px-6 text-sm text-gray-900">Admin</td>
                <td className="py-4 px-6 text-sm text-gray-600">2025-10-01</td>
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
                <td className="py-4 px-6 text-sm text-gray-900">Jane Smith</td>
                <td className="py-4 px-6 text-sm text-gray-600">jane@example.com</td>
                <td className="py-4 px-6 text-sm text-gray-900">Customer</td>
                <td className="py-4 px-6 text-sm text-gray-600">2025-09-15</td>
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
