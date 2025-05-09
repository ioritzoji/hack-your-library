import { useEffect, useState } from 'react'
import { Card } from '../components/Card'
import { Search } from '../components/Elements/Search'
import { useLocation } from 'react-router-dom'
import { useTitle } from '../hooks/useTitle'

export const Products = () => {
  const [ data, setData ] = useState([])

  useTitle("Explore eBooks")

  const search = useLocation().search
  const searchTerm = new URLSearchParams(search).get("q")

  useEffect(() => {
      const fetchFeatured = async () => {
        const response = await fetch(`${import.meta.env.VITE_APP_HOST}/products`)
        const json = await response.json()

        if (searchTerm) {
          const filtered = json.filter(p =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setData(filtered)
        } else {
          setData(json)
        }
      }
  
      fetchFeatured()
    }, [searchTerm, data])

  return (
    <main className='dark:bg-gray-800 dark:text-white min-h-[90vh] pt-10 p-4 md:px-8'>
      <section className='max-w-[1200px] mx-auto'>
        <div className='flex flex-col items-start justify-between mb-6 lg:flex-row'>
          <h2 className='text-2xl font-semibold mb-4'>All eBooks ({data.length})</h2>
          <Search />
        </div>
        
        <div className='flex flex-wrap justify-around xl:justify-start gap-12'>
          { data.map(product => (
            <Card key={product.id} ebook={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
