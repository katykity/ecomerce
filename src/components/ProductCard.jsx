import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = (product) => {
  return (
    <div className='product-card'>
      <img src={product.image} alt={product.name} className='product-image' />
      <h3>{product.name}</h3>
      <p className='product-price'>${product.price.toFixed(2)}</p>
      <p className='product-category'>{product.category}</p>
      <Link to={`/product/${product.id}`} className='view-details-btn'>
        Ver Detalles
      </Link>
    </div>
  )
}

export default ProductCard
