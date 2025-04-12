import { useLocation } from 'react-router-dom'
import ProductBanner from '../../components/ProductBanner'
import { Container } from './styles'
import Pizza from './Pizza'
const ProductDetails = () => {
  const location = useLocation()
  const { title, bannerImage, tag } = location.state

  return (
    <Container>
      <ProductBanner />
      <div className="image-wrapper">
        <img className="productimage" src={bannerImage} alt={title} />
        <p className="tag">{tag}</p>
        <h1>{title}</h1>
      </div>
      <Pizza />
    </Container>
  )
}

export default ProductDetails
