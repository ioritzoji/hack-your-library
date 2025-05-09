import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <section className="max-w-[1200px] mx-auto flex justify-center text-center mt-2 p-4 mb-10">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl max-w-2xl font-sans font-bold mb-4">Learn Programming and Cybersecurity with Expert eBooks</h1>
        <p className="text-gray-400">Unlock the skills needed to excel in today's tech-driven world. Our expertly curated eBooks cover everything from programming languages to advanced cybersecurity techniques, ensuring you're equipped with the knowledge to succeed.</p>
        <Link to="/products" className="p-3 bg-amber-200 text-black rounded inline-block my-4 font-semibold hover:bg-amber-300">Explore eBooks</Link>
      </div>
    </section>
  )
}
