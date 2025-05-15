import React, { useState, useEffect } from 'react'
import { getProducts } from '../services/api'
import ProductCard from '../components/ProductCard'

const HomePage = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts()
        setProducts(response.data)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar los productos')
        setLoading(false)
        console.error(err)
      }
    }

    fetchProducts()
  }, [])

  if (loading) return <div className='loading'>Cargando productos...</div>
  if (error) return <div className='error'>{error}</div>

  return (
    <div className='home-page'>
      <h1>Nuestros Productos</h1>
      <div className='products-grid'>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default HomePage
