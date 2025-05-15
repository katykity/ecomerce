import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import ProductDetailPage from './pages/ProductDetailPage'
import SearchResultsPage from './pages/SearchResultsPage'
import './styles/App.css'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/product/:id' element={<ProductDetailPage />} />
            <Route path='/search' element={<SearchResultsPage />} />
          </Routes>
        </main>
        <footer className='footer'>
          <p>&copy; 2025 E-Commerce Store. Todos los derechos reservados.</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
