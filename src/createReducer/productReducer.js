export function productReducer(state, action) {
 switch (action.type) {
  case "Add": {
   return { ...state, cartList: [...state.cartList, action.cartList] };
  }
  case "increment": {
   return {
    ...state,
   };
  }

  case "Delete": {
   return {
    ...state,
    cartList: [...state.cartList?.filter((item) => item.id !== action.id)],
   };
  }
  case "clear": {
   return {
    ...state,
    cartList: [],
   };
  }
  default:
   return state;
 }
}
