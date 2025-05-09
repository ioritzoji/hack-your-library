import { useNavigate } from "react-router-dom"
import { useTitle } from "../hooks/useTitle"

export const Login = () => {
  const navigate = useNavigate()
  useTitle("Login")

  const handleSubmit = () => {
    navigate("/products")
  }

  return (
    <main className="dark:bg-gray-800 dark:text-white pt-10 p-4 min-h-[90vh]">
      <section className="max-w-2xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-2xl text-center text-gray-900 dark:text-white border-b-2 inline-block mb-8 font-semibold">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <label className="mb-2" htmlFor="email">Your email</label>
          <input type="email" id="email" name="email" required placeholder="example@gmail.com" className="bg-gray-100 dark:bg-gray-700 focus: outline-0 px-4 py-3 focus:outline-2 focus:outline-gray-200 dark:focus:outline-gray-500 rounded-[5px] mb-8" />

          <label className="mb-2" htmlFor="password">Your password</label>
          <input type="password" id="password" minLength={6} name="password" required className="bg-gray-100 dark:bg-gray-700 focus: outline-0 px-4 py-3 focus:outline-2 focus:outline-gray-200 dark:focus:outline-gray-500 rounded-[5px]" />

          <button  className="ml-auto px-4 py-2 text-white font-semibold mt-6 bg-blue-700 hover:bg-blue-600 cursor-pointer rounded-[10px]">Log In</button>
        </form>
        <button className="ml-auto px-4 py-2 font-semibold mt-6 hover:bg-gray-100 dark:hover:bg-gray-900  border-2 border-blue-600 cursor-pointer rounded-[10px]">Login As Guest</button>
      </section>
      
    </main>
  )
}
