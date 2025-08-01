import Header from "./components/Header";
import RootLayout from "./components/RootLayout";
import Footer from "./components/Footer";
import "./App.css";
import { ProductContext } from "./context";
import { useReducer, useState } from "react";
import { productReducer } from "./createReducer/productReducer";
import { products } from "./data/products";

export default function App() {
 const [productList, dispatch] = useReducer(productReducer, products);

 return (
  <>
   <ProductContext.Provider value={{ productList, dispatch }}>
    <Header />
    <RootLayout />
    <Footer />
   </ProductContext.Provider>
  </>
 );
}
