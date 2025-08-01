import React, { useContext } from "react";
import CategoryFilter from "./CategoryFilter";
import ProductsCard from "./ProductsCard";
import Cart from "./Cart";
import { ProductContext } from "../context";

export default function RootLayout() {
 const { productList, dispatch } = useContext(ProductContext);
 const { cartList } = productList;

 const handleAddToCart = (item) => {
  const isExisting =
   cartList.length > 0 && cartList.some((isItem) => isItem.id === item.id);

  if (!isExisting) {
   return dispatch({
    type: "Add",
    cartList: item,
   });
  }
  return dispatch({
   type: "Delete",
   id: item.id,
  });
 };

 return (
  <main className="container mx-auto px-4 md:px-8 py-8">
   <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <div className="lg:col-span-2">
     <CategoryFilter />

     <ProductsCard productList={productList} onCart={handleAddToCart} />
    </div>

    <div className="lg:col-span-1">
     <Cart productList={productList} dispatch={dispatch} />
    </div>
   </div>
  </main>
 );
}
