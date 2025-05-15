import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { searchProducts } from '../services/api'
import ProductCard from '../components/ProductCard'

const SearchResultsPage = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search).get('q')
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        setLoading(true)
        const response = await searchProducts(query)
        setProducts(response.data)
        setLoading(false)
      } catch (err) {
        setError('Error al buscar productos')
        setLoading(false)
        console.error(err)
      }
    }

    if (query) {
      fetchSearchResults()
    }
  }, [query])

  if (loading) return <div className='loading'>Buscando productos...</div>
  if (error) return <div className='error'>{error}</div>

  return (
    <div className='search-results'>
      <h1>Resultados de búsqueda para: "{query}"</h1>
      {products.length === 0
        ? (
          <p>No se encontraron productos que coincidan con tu búsqueda.</p>
          )
        : (
          <div className='products-grid'>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          )}
    </div>
  )
}

export default SearchResultsPage
