import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../services/api'

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductById(id)
        setProduct(response.data)
        setLoading(false)
      } catch (err) {
        setError('Error al cargar los detalles del producto')
        setLoading(false)
        console.error(err)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) return <div className='loading'>Cargando detalles del producto...</div>
  if (error) return <div className='error'>{error}</div>
  if (!product) return <div className='not-found'>Producto no encontrado</div>

  return (
    <div className='product-detail'>
      <div className='product-image-container'>
        <img src={product.image} alt={product.name} className='product-detail-image' />
      </div>
      <div className='product-info'>
        <h1>{product.name}</h1>
        <p className='product-price'>${product.price.toFixed(2)}</p>
        <p className='product-category'>Categoría: {product.category}</p>
        <p className='product-description'>{product.description}</p>
        <button className='buy-button' disabled>Comprar</button>
        <p className='login-message'>
          (El botón de compra estará activo después de iniciar sesión)
        </p>
      </div>
    </div>
  )
}

export default ProductDetailPage
