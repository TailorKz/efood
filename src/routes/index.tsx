import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/produto" element={<ProductDetails />} />
  </Routes>
)

export default Rotas
