import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useCart } from "../../context/CartContext"
import { Logo, cartWhite, cartBlack } from "../../assets/index"
import { DropDownLoggedOut } from "../Elements/DropDownLoggedOut"
import { DropDownLoggedIn } from "../Elements/DropDownLoggedIn"

export const Header = () => {
  const [darkMode, setDarkMode ] = useState(JSON.parse(JSON.parse(localStorage.getItem("darkMode"))) || false);
  const [showUser, setShowUser] = useState(false);

  const { cartList }  = useCart();

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    darkMode ? document.documentElement.classList.add("dark") : document.documentElement.removeAttribute("class")
  }, [darkMode])

  return (
    <header className="dark:bg-gray-900 dark:text-white shadow p-4 md:px-8">
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="HackYourLibrary logo" className="w-11" />
          <span className="text-xl font-semibold">HackYourLibrary</span>
        </Link>

        <ul className="flex items-center gap-2 md:gap-4">
          <button onClick={() => setDarkMode(!darkMode)} data-tooltip-target="navbar-search-example-toggle-dark-mode-tooltip" type="button" data-toggle-dark="light" className="cursor-pointer flex items-center p-2 mr-2 md:mr-4 text-xs font-medium text-gray-700 bg-white rounded-lg border border-gray-200 toggle-dark-state-example hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            { darkMode ? (<svg aria-hidden="true" data-toggle-icon="sun" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>) : (<svg aria-hidden="true" data-toggle-icon="moon" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>) }
          </button>
          <Link to="/cart" className="relative">
            <img src={darkMode ? cartWhite : cartBlack} className="w-9"></img>
            <span className="absolute -top-1 right-1 bg-red-400 rounded-3xl px-1 text-sm font-semibold">{cartList.length}</span>
          </Link>

          <div onClick={() => setShowUser(!showUser)} className="relative w-8 h-8 overflow-hidden rounded-full cursor-pointer outline-2 outline-black dark:outline-white">
            <svg className="absolute w-10 h-10 text-gray-800 dark:text-gray-100 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
          </div>

          <DropDownLoggedOut showUser={showUser} setShowUser={setShowUser} />
        </ul>
      </nav>
    </header>
  )
}
