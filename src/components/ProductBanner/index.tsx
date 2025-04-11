import { BannerImg } from './styles'
import bannerImagem from '../../assets/images/Hero.png'
import logo from '../../assets/images/logo.png'

const ProductBanner = () => (
  <BannerImg style={{ backgroundImage: `url(${bannerImagem})` }}>
    <h2>Restaurantes</h2>
    <img src={logo} alt="EFOOD" />
    <h2>0 produto(s) no carrinho</h2>
  </BannerImg>
)
export default ProductBanner
