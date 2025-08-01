import React from "react";

export default function Checkout({ productList }) {
 console.log("productList", productList);

 const subTotal =
  productList?.cartList &&
  productList?.cartList?.reduce((acc, cur) => acc + parseInt(cur.price), 0);

 const discount = subTotal && subTotal - (subTotal * 20) / 100;

 const discountAmount = discount && Math.abs(discount - subTotal);

 const grandTotal =
  productList?.cartList?.length > 0 ? subTotal - discountAmount + 15 : 0;

 return (
  <div className="mt-6">
   <h3 className="font-bold text-lg mb-4">Order Summary</h3>

   <div className="space-y-2 mb-4">
    <div className="flex justify-between">
     <span className="text-gray-600">Subtotal</span>
     <span className="font-medium">${subTotal}</span>
    </div>
    <div className="flex justify-between text-red-500">
     <span>Discount (-20%)</span>
     <span>-${discountAmount}</span>
    </div>
    <div className="flex justify-between">
     <span className="text-gray-600">Delivery Fee</span>
     <span className="font-medium">$15</span>
    </div>
    <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
     <span>Total</span>
     <span>${grandTotal}</span>
    </div>
   </div>

   <div className="flex items-center space-x-2 mb-6">
    <div className="flex-grow relative">
     <input
      type="text"
      placeholder="Add promo code"
      className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
     />
    </div>
    <button className="bg-black text-white rounded-md px-4 py-2 text-sm">
     Apply
    </button>
   </div>

   <a
    href="#"
    className="block bg-black text-white text-center py-3 rounded-md hover:bg-gray-800 transition-colors"
   >
    Go to Checkout
    <span className="inline-block ml-2">→</span>
   </a>
  </div>
 );
}
