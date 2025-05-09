import { Link } from "react-router-dom"

export const Footer = () => {
  return (
    <footer className=" bg-white shadow-sm dark:bg-gray-800 p-4 pt-12 md:px-8 md:pb-8">
      <div className="max-w-[1200px] mx-auto flex flex-col item-center justify-between md:flex-row">
        <span className="text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <Link to="/" className="hover:underline">HackYourLibrary™</Link>. All Rights Reserved.</span>
        <ul className="flex flex-wrap items-center justify-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">About</Link>
          </li>
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">Licensing</Link>
          </li>
          <li>
            <a href="mailto:ioritzojinaga@gmail.com" className="hover:underline">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
