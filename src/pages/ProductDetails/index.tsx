import { useLocation } from 'react-router-dom'
import ProductBanner from '../../components/ProductBanner'
import { Container } from './styles'

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
    </Container>
  )
}

export default ProductDetails
