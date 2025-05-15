import axios from 'axios'

const API_URL = 'https://ecommerce-json-jwt.onrender.com'

const api = axios.create({
  baseURL: API_URL
})

export default api
