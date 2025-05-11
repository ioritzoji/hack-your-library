import { useEffect, useState } from "react"
import { Card } from "../../../components/Card"

export const Featured = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchFeatured = async () => {
      const response = await fetch("https://hack-your-library-892ab0acfd08.herokuapp.com/featured_products")
      const json = await response.json()
      setData(json)
    }

    fetchFeatured()
  }, [])

  return (
    <section className="max-w-[1200px] mx-auto p-4 md:px-8 xl:px-0">
      <div className="text-center">
        <h2 className="text-3xl border-b-2 text-gray-900 dark:text-white inline-block mb-8 font-semibold">Featured eBooks</h2>
      </div>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-around lg:justify-between gap-4">
        { data.map(ebook => (
          <Card key={ebook.id} ebook={ebook} />
        )) }
      </div>
    </section>
  )
}
