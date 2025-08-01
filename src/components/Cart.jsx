import Checkout from "./Checkout";
import CartItems from "./CartItems";

export default function Cart({ productList, dispatch }) {
 return (
  <div className="bg-white rounded-lg p-6 border border-gray-200">
   <CartItems productList={productList} dispatch={dispatch} />
   <Checkout />
  </div>
 );
}
