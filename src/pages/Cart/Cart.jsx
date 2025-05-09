import { useState } from "react"
import { CartCard } from "../../components/CartCard"
import { useCart } from "../../context/CartContext"
import { useTitle } from "../../hooks/useTitle"
import { Checkout } from "./components/Checkout"

export const Cart = () => {
  const { cartList, total } = useCart()
  const [ checkout, setCheckout ] = useState(false)

  function handleClick() {
    if (cartList.length > 0) {
      setCheckout(!checkout)
    }
  }

  useTitle(`Cart (${cartList.length})`)

  const activeButton = "inline-flex ml-auto mt-6 items-center px-4 py-3 cursor-pointer text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700"
  const disabledButton = "cursor-not-allowed inline-flex ml-auto mt-6 items-center px-4 py-3 text-sm font-semibold text-center text-dark bg-gray-200 rounded-lg dark:text-white dark:bg-gray-600"

  return (
    <main className="dark:bg-gray-800 dark:text-white min-h-[90vh] pb-20 pt-7 p-4">
      <section className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-2xl text-gray-900 dark:text-white border-b-2 inline-block mb-8 mt-6 font-semibold">My Cart ({cartList.length})</h2>
        { cartList.map(cart => (
        <CartCard key={cart.id} cart={cart} />
        ))}
        <div className="flex items-center justify-between  py-4 border-y border-gray-400 mt-6 w-full">
          <p>Total Amount:</p>
          <span>${total}</span>
        </div>
        <button onClick={handleClick} className={cartList.length ? activeButton : disabledButton}>
            Place order
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
          </button>
        {checkout && <Checkout checkout={checkout} setCheckout={setCheckout} total={total} />}
      </section>
    </main>
  )
}
