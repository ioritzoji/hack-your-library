import { Link } from "react-router-dom"

export const DropDownLoggedOut = ({ setShowUser, showUser }) => {
  return (
    <div className={`text-sm absolute top-17 shadow bg-white dark:bg-gray-700 rounded w-40 z-10 ${showUser ? "" : "hidden"}`} >
      <ul>
        <li><Link onClick={() => setShowUser(false)} className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded" to="/products">All eBooks</Link></li>
        <li><Link onClick={() => setShowUser(false)} className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded" to="/login">Login</Link></li>
        <li><Link onClick={() => setShowUser(false)} className="block p-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded" to="/register">Register</Link></li>
      </ul>
    </div>
  )
}
