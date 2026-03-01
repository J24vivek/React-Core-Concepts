import React from "react";
import { Link } from "react-router-dom";

function Product() {
  
  return (
    <div className="w-full h-[95vh] flex justify-center items-center">
      <h1 className="text-7xl font-bold text-gray-800">Product</h1>
      <Link to="/product/123" className="text-lg font-medium text-blue-600 hover:text-blue-500">
        View Details
      </Link>
      
    </div>
  );
}

export default Product;
