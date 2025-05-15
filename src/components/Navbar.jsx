import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`)
    }
  }

  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <Link to='/'>E-Commerce Store</Link>
      </div>
      <div className='search-bar'>
        <form onSubmit={handleSearch}>
          <input
            type='text'
            placeholder='Buscar productos...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type='submit'>Buscar</button>
        </form>
      </div>
      <div className='navbar-links'>
        <Link to='/login'>Iniciar Sesión</Link>
        <Link to='/signup'>Registrarse</Link>
      </div>
    </nav>
  )
}

export default Navbar
