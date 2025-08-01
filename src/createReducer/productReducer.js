export function productReducer(state, action) {
 switch (action.type) {
  case "Add":
   {
    return { ...state, cartList: [...state.cartList, action.cartList] };
   }
   break;
  // case "Edit":
  //   {
  //     return state.map((product) => product.id === action.payload);
  //   }
  //   break;
  case "Delete": {
   return {
    ...state,
    cartList: [...state.cartList?.filter((item) => item.id !== action.id)],
   };
  }
  default:
   return state;
 }
}
