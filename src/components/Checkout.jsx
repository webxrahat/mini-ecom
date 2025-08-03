import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Checkout({ productList, dispatch }) {
 //  console.log("productList", productList);

 const subTotal =
  productList?.cartList &&
  productList?.cartList?.reduce((acc, cur) => acc + parseInt(cur.price), 0);

 const discount = subTotal && subTotal - (subTotal * 20) / 100;

 const discountAmount = discount && Math.abs(discount - subTotal);

 const grandTotal =
  productList?.cartList?.length > 0 ? subTotal - discountAmount + 15 : 0;

 const [cupon, setCupon] = useState("");
 const [updateTotal, setUpdateTotal] = useState("");

 const cuponValue = "1234";

 //  console.log("updateTotal", updateTotal);

 const handleCuponApply = () => {
  if (!(cupon === "")) {
   if (cupon === cuponValue) {
    toast.success("Successfully apply cupon", {
     position: "top-right",
     autoClose: 2000,
     theme: "colored",
    });
    setUpdateTotal(grandTotal - 50);
   } else {
    toast.error("Faild apply cupon", {
     position: "top-right",
     autoClose: 2000,
     theme: "colored",
    });
   }
  } else {
   toast.info("Please provide a code", {
    position: "top-right",
    autoClose: 2000,
    theme: "colored",
   });
  }
 };

 const handleComplateOrder = () => {
  toast.success("Successfully Complete order", {
   position: "top-right",
   autoClose: 2000,
   theme: "colored",
  });
  setTimeout(() => {
   dispatch({ type: "clear" });
  }, 2000);
 };

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
     <span className="font-medium">
      ${productList?.cartList?.length > 0 ? 15 : 0}
     </span>
    </div>
    <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-200">
     <span>Total</span>
     <span>${updateTotal ? updateTotal : grandTotal}</span>
    </div>
   </div>

   <div className="flex items-center space-x-2 ">
    <div className="flex-grow relative">
     <input
      onChange={(e) => setCupon(e.target.value)}
      type="text"
      placeholder="Add promo code"
      className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm"
     />
    </div>
    <button
     onClick={handleCuponApply}
     className="bg-black text-white rounded-md px-4 py-2 text-sm cursor-pointer"
    >
     Apply
    </button>
   </div>
   {productList?.cartList && (
    <p className="text-lime-600 mt-1">
     Enter 1234 for apply code for $50 discount
    </p>
   )}
   <ToastContainer />

   <a
    href="#"
    onClick={handleComplateOrder}
    className="block bg-black text-white text-center mt-5 py-3 rounded-md hover:bg-gray-800 transition-colors"
   >
    Go to Checkout
    <span className="inline-block ml-2">→</span>
   </a>
  </div>
 );
}
