import Banner from './components/Banner'
import Footer from './components/Footer'
import ProductList from './components/Product/ProductList'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Banner />
      <ProductList />
      <Footer />
    </>
  )
}

export default App
