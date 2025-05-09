import { useTitle } from "../../hooks/useTitle"
import { Hero, Featured, Testimonials, Questions  } from "./components"

export const Home = () => {
  useTitle("Home")

  return (
    <main className="dark:bg-gray-800 dark:text-white pt-10 min-h-[95vh]">
      <Hero />
      <Featured />
      <Testimonials />
      <Questions />
    </main>
  )
}
