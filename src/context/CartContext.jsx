import { createContext, useContext, useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer"

const initialState = {
  total: 0,
  cartList: [],
}

const CartContext = createContext(initialState)

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product)
    updateTotal(updatedCartList)

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList
      }
    })
  }

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(current => current.id !== product.id)
    updateTotal(updatedCartList)

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList
      }
    })
  }

  const updateTotal = (products) => {
    let total = 0
    products.forEach(product => total = total + product.price )

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total
      }
    })
  }

  const removeAll = () => {
    const updatedCartList = []
    const updatedTotal = 0

    dispatch({
      type: "REMOVE_ALL",
      payload: {
        products: updatedCartList,
        total: updatedTotal
      }
    })
  }

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
    removeAll
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
