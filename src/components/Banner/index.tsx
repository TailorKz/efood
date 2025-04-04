 import { BannerImg } from './styles'
 import bannerImagem from '../../assets/images/Hero.png'
 import logo from '../../assets/images/logo.png'
 const Banner = () => (

    <BannerImg style={{ backgroundImage: `url(${bannerImagem})` }}>
    <img src={logo} alt="EFOOD" />
    <h1>Viva experiências gastronômicas <br/>no conforto da sua casa</h1>
  </BannerImg>
 )
  
 export default Banner