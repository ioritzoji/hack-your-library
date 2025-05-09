import { useEffect, useState } from "react"
import { useCart } from "../context/CartContext"
import { Rating } from "./Elements/Rating"
import { Link } from "react-router-dom"

export const Card = ({ ebook }) => {
  const { addToCart, cartList, removeFromCart } = useCart()
  const [isInCart, setIsInCart] = useState(false)

  const removeButton = "inline-flex items-center px-3 py-2 text-center text-white cursor-pointer bg-red-700 rounded-lg hover:bg-red-800"
  const addButton = "inline-flex items-center px-3 py-2 text-center text-white cursor-pointer bg-blue-700 rounded-lg hover:bg-blue-800"

  useEffect(() => {
    const filterCart = cartList.find(cart => cart.id === ebook.id)

    if (filterCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [cartList, ebook.id])

  return (
    <div className="max-w-[361px]  flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/products/${ebook.id}`} className="relative">
        { ebook.best_seller && <span className="absolute top-4 left-2 whitespace-nowrap px-2 z-10 ml-auto bg-orange-500 bg-opacity-90 text-white rounded">Best Seller</span> }
        <img loading="lazy" className="rounded-t-lg w-full h-60 -z-10" src={ebook.image_local} alt={ebook.name} />
      </Link>
      <div className="p-5 h-full flex flex-col">
        <Link to={`/products/${ebook.id}`}>
            <h5 className="mb-2 text-2xl font-bold text-left tracking-tight text-gray-900 dark:text-white">{ebook.name}</h5>
        </Link>
        <p className="mb-3 text-left font-normal text-gray-700 dark:text-gray-400">{ebook.overview}</p>
        <div className="mt-auto"> 
          <div className="flex items-center">
            <Rating rating={ebook.rating} />
          </div>
          <div className="mt-auto flex items-center justify-between">
            <span className="text-xl font-semibold">${ebook.price}</span>
            {isInCart ? <button onClick={() => removeFromCart(ebook)} className={removeButton}>Remove <i className="ml-1 bi bi-trash3"></i></button> : <button onClick={() => addToCart(ebook)} className={addButton}>Add eBook <i className="ml-1 bi bi-plus-lg"></i></button> }
          </div>
        </div>
      </div>
    </div>
  )
}
