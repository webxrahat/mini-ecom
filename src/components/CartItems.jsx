import React, { useContext, useState } from "react";
import { ProductContext } from "../context";
import Checkout from "./Checkout";

export default function CartItems({ productList, dispatch }) {
 const handleRemove = (itemId) => {
  dispatch({
   type: "Delete",
   id: itemId,
  });
 };

 const [itemAction, setItemAction] = useState(1);

 const handleIncrement = (itemId) => {
  setItemAction(itemAction + 1);
  dispatch({
   type: "increment",
   id: itemId,
  });
 };
 const handleDecrement = (itemId) => {
  setItemAction(itemAction - 1);
  dispatch({
   type: "decrement",
   id: itemId,
  });
 };

 return (
  <>
   {productList?.cartList?.length > 0 ? (
    <>
     <div>
      <h2 className="text-2xl font-bold mb-6">YOUR CART</h2>
      {productList?.cartList?.length > 0 &&
       productList.cartList.map((item) => (
        <div
         key={item.id}
         className="flex items-start space-x-4 pb-4 border-b border-gray-200 mb-4"
        >
         <div className="w-16 h-16 bg-gray-100 rounded flex-shrink-0 flex items-center justify-center">
          <img
           src={item.image}
           alt="Gradient Graphic T-shirt"
           className="h-full w-auto object-cover"
          />
         </div>
         <div className="flex-grow">
          <div className="flex justify-between">
           <h3 className="font-medium">{item.name}</h3>
           <button onClick={() => handleRemove(item.id)}>
            <span className="text-red-500 text-lg cursor-pointer bg-gray-200 px-2 py-1 rounded-full">
             ×
            </span>
           </button>
          </div>

          <div className="flex justify-between items-center mt-2">
           <p className="font-bold">$ {item.price}</p>
           {/* <div className="flex items-center space-x-2">
            <button
             onClick={() => handleDecrement(item.id)}
             className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer"
            >
             −
            </button>
            <span className="text-sm">{itemAction}</span>
            <button
             onClick={() => handleIncrement(item.id)}
             className="w-6 h-6 bg-gray-100 rounded flex items-center justify-center cursor-pointer"
            >
             +
            </button>
           </div> */}
          </div>
         </div>
        </div>
       ))}
     </div>

     <Checkout productList={productList} dispatch={dispatch} />
    </>
   ) : (
    <p className="text-2xl">Empty cart</p>
   )}
  </>
 );
}
