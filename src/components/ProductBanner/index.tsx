import { BannerImg } from './styles'
import bannerImagem from '../../assets/images/Hero.png'
import logo from '../../assets/images/logo.png'

const ProductBanner = () => (
  <BannerImg style={{ backgroundImage: `url(${bannerImagem})` }}>
    <h2>Restaurantes</h2>
    <a href="./">
      <img src={logo} alt="EFOOD" />
    </a>

    <h2>0 produto(s) no carrinho</h2>
  </BannerImg>
)
export default ProductBanner
