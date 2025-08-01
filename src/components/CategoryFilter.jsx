import React from "react";

export default function CategoryFilter() {
 return (
  <div className="flex items-center justify-between mb-6">
   <h2 className="text-2xl font-bold">Your Products</h2>
   <div className="flex items-center space-x-2">
    <span className="text-sm">Sort by:</span>
    <select className="border rounded-md px-2 py-1 text-sm">
     <option>Most Popular</option>
     <option>Newest</option>
     <option>Price: Low to High</option>
     <option>Price: High to Low</option>
    </select>
   </div>
  </div>
 );
}
