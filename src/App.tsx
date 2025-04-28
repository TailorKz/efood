import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import Rotas from './routes'
import { GlobalCss } from './styles'
import Cart from './components/Cart'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container"></div>
      <Rotas />
      <Footer />
      <Cart />
    </BrowserRouter>
  )
}

export default App
