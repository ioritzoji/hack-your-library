import { Link } from "react-router-dom"
import { useTitle } from "../hooks/useTitle"

export const PageNotFound = () => {
  useTitle("Page Not Found")
  return (
    <main className="dark:bg-gray-800 dark:text-white pt-30 min-h-[80vh] flex flex-col items-center p-4 md:px-8">
      <section className="flex flex-col px-2">
        <div className="flex flex-col items-center my-2">
          <p className="text-7xl text-gray-700 font-bold my-6 dark:text-white text-center">404, Oops!</p>
          <div className="max-w-xs">
          </div>
        </div>
        <div className="flex justify-center my-2">
          <Link to="/">
            <button type="button" className="w-54 text-xl cursor-pointer text-black font-semibold bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 hover:bg-gradient-to-br rounded-lg px-5 py-2.5 text-center mr-2 mb-2">Back To Home</button>
          </Link>
        </div>
      </section>
    </main>
  )
}
