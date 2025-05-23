export const cartReducer = (state, action) => {
  const {type, payload} = action

  switch(type){
    case "ADD_TO_CART":
      return {...state, cartList: payload.products}
    
    case "REMOVE_FROM_CART":
      return {...state, cartList: payload.products}
    
    case "UPDATE_TOTAL":
      return {...state, total: payload.total}
    
    case "REMOVE_ALL":
      return {cartList: payload.products, total: payload.total}

    default:
      throw new Error("No Case Found In cartReducer")
  }
}