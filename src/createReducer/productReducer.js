export function productReducer(state, action) {
 switch (action.type) {
  case "Add": {
   return { ...state, cartList: [...state.cartList, action.cartList] };
  }
  case "increment": {
   const newqty = state.itemList?.map((item) => {
    if (item.id === action.id) {
     const newItem = {
      ...item,
      inventory: Math.max(Number(item.inventory) - 1, 0),
     };

     return newItem;
    }
    return item;
   });

   return {
    ...state,

    itemList: newqty,
   };

   console.log("newqty", newqty);
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
