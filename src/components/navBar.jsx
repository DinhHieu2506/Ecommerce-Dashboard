import React from "react";

import { Input, Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function NavBar() {
     return (
       <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-lg font-semibold text-gray-900"><ShoppingCartOutlined  /> E-commerce Dashboard</h1>
            <nav className="flex space-x-8">
              <a href="#" className="text-gray-600  hover:text-blue-700">Product</a>
              <a href="#" className="text-gray-600 hover:text-blue-900">User</a>
              <a href="#" className="text-gray-600 hover:text-blue-900">Order</a> 
            </nav>
          </div>
        </div>
      </div>
  );
}