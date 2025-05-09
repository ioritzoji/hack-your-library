import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext"

export const CartCard = ({ cart }) => {
  const { removeFromCart } = useCart()

  return (
    <div className="flex items-start gap-4 w-full mb-4 ">
      <Link to={`/products/${cart.id}`}>
        <img className="w-40 h-20 object-cover rounded" src={cart.image_local} alt={cart.name} />
      </Link>
      <div className="text-left">
        <h3 className="text-lg font-semibold">{cart.name}</h3>
        <button onClick={() => removeFromCart(cart)} className="text-red-600 cursor-pointer">Remove</button>
      </div>
      <p className="ml-auto font-semibold">${cart.price}</p>
    </div>
  )
}
