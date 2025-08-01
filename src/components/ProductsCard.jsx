import { useContext } from "react";
import { ProductContext } from "../context";
import Rating from "./Rating";

export default function ProductsCard({ productList, onCart }) {
 const { cartList } = productList;

 return (
  <div className="product-grid">
   {productList.itemList.map((item) => {
    const isExisting =
     cartList.length > 0 && cartList.some((isItem) => isItem.id === item.id);

    return (
     <div
      key={item.id}
      className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
     >
      <div className="h-48 bg-gray-200 flex items-center justify-center">
       <img
        src={item.image}
        alt={item.name}
        className="h-full w-auto object-cover"
       />
      </div>
      <div className="p-4">
       <h3 className="font-medium">{item.name}</h3>
       <div className="flex items-center justify-between">
        <Rating value={item.rating} />

        <span className="text-xs text-gray-700">
         ({item.inventory} pcs left)
        </span>
       </div>
       <p className="font-bold">$ {item.price} </p>
       {isExisting ? (
        <button
         onClick={() => onCart(item)}
         className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
        >
         Remove from Cart
        </button>
       ) : (
        <button
         onClick={() => onCart(item)}
         className="bg-gray-700 w-full mt-2 py-1 text-gray-100 rounded flex items-center justify-center cursor-pointer"
        >
         Add to Cart
        </button>
       )}
      </div>
     </div>
    );
   })}
  </div>
 );
}
