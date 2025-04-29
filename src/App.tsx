import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Rotas from './routes'
import { GlobalCss } from './styles'
import Cart from './components/Cart'
import { useSelector } from 'react-redux'
import { RootState } from './store/store'

function App() {
  const isCartOpen = useSelector((state: RootState) => state.cart.isOpen)

  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container"></div>
      <Rotas />
      <Footer />
      {isCartOpen && <Cart />}
    </BrowserRouter>
  )
}

export default App
