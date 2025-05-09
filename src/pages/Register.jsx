import { useNavigate } from "react-router-dom"
import { useTitle } from "../hooks/useTitle"
import { ToastContainer} from "react-toastify"

export const Register = () => {
  useTitle("Register")
  const navigate = useNavigate()
  
  async function handleSubmit(event) {
    event.preventDefault()

    /* const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(user)
    })
    */

    navigate("/products")

  }

  return (
    <main className="dark:bg-gray-800 dark:text-white pt-10 min-h-[90vh] p-4">
      <section className="max-w-2xl mx-auto flex flex-col items-center justify-center">
        <h2 className="text-2xl text-center text-gray-900 dark:text-white border-b-2 inline-block mb-8 font-semibold">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col w-full">
          <label className="mb-2" htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required placeholder="David Miller" className="bg-gray-100 dark:bg-gray-700 focus: outline-0 px-4 py-3 focus:outline-2 focus:outline-gray-200 dark:focus:outline-gray-500 rounded-[5px] mb-8" />

          <label className="mb-2" htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" placeholder="example@gmail.com" required className="bg-gray-100 dark:bg-gray-700 focus: outline-0 px-4 py-3 focus:outline-2 focus:outline-gray-200 dark:focus:outline-gray-500 rounded-[5px] mb-8" />

          <label className="mb-2" htmlFor="password">Your Password</label>
          <input type="password" minLength={6} id="password" name="password" required className="bg-gray-100 dark:bg-gray-700 focus: outline-0 px-4 py-3 focus:outline-2 focus:outline-gray-200 dark:focus:outline-gray-500 rounded-[5px]" />

          <button className="ml-auto px-4 py-2 text-white font-semibold mt-6 bg-blue-700 hover:bg-blue-600 cursor-pointer rounded-[10px]">Register</button>
        </form>
        <ToastContainer />
      </section>
    </main>
  )
}
