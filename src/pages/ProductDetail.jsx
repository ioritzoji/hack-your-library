import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { Rating } from "../components/index";
import { useCart } from "../context/CartContext";
import { useTitle } from "../hooks/useTitle";

export const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [ isInCart, setIsInCart ] = useState(false)
  const { id } = useParams();
  const { addToCart, removeFromCart, cartList } = useCart()

  useTitle(product.name)

  const addButton = "inline-flex items-center cursor-pointer py-2 px-5 font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800"
  const removeButton = "inline-flex items-center cursor-pointer py-2 px-5 font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
  
  useEffect (() => {
    const filterCart = cartList.find(cart => cart.id === product.id)

    if (filterCart) {
      setIsInCart(true)
    } else {
      setIsInCart(false)
    }
  }, [cartList, product.id])
  
  useEffect(() => {
    async function fetchProducts(){
      const response = await fetch(`http://localhost:3000/products/${id}`);
      const data = await response.json()
    
      setProduct(data);
    }
    fetchProducts();
  }, [id]);

  return (
    <main className="dark:bg-gray-800 dark:text-white p-4 md:px-8">
      <section className="max-w-[1200px] mx-auto pt-4 min-h-dvh">
        <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{product.name}</h1>
        <p className="mb-5 md:max-w-1/2 mx-auto text-center text-gray-900 dark:text-slate-200">{product.overview}</p>
        <div className="flex flex-wrap justify-around">
          <div className="max-w-xl my-3">
            <img className="rounded h-full object-cover" src={product.image_local} alt={product.name} />
          </div>
          <div className="max-w-xl my-3">
            <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
              <span className="mr-1">$</span>
              <span className="">{product.price}</span>
            </p>
            <p className="my-3"> 
              <span>
                <Rating rating={product.rating} />
              </span>
            </p>
            <p className="my-4 select-none">
              { product.best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span> }
              { product.in_stock && <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span> }
              { !product.in_stock && <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span> }
              <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">{product.size} MB</span>
            </p>
            <p className="my-3">
              {isInCart ? <button onClick={() => removeFromCart(product)} className={removeButton}>Remove <i className="ml-1 bi bi-trash3"></i></button> : <button onClick={() => addToCart(product)} className={addButton}>Add eBook <i className="ml-1 bi bi-plus-lg"></i></button> }
            </p>
            <p className="text-gray-900 dark:text-slate-200">
              {product.long_description}
            </p>
          </div>
        </div>
      </section>
    </main> 
  )
}