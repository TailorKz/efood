import { FooterContainer, LogoFooter, Image, Redes, About } from './styles'
import logo from '../../assets/images/logo.png'
import insta from '../../assets/images/instagram-round-svgrepo-com (1) 1 (1).png'
import facebook from '../../assets/images/facebook-round-svgrepo-com 1.png'
import twitter from '../../assets/images/twitter-2-svgrepo-com 1.png'
const Footer = () => (
  <FooterContainer>
    <LogoFooter>
      <Image src={logo} alt="Logo da efood" />
    </LogoFooter>
    <Redes>
      <img src={insta}></img>
      <img src={facebook}></img>
      <img src={twitter}></img>
    </Redes>
    <About>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade
      <br /> dos produtos é toda do estabelecimento contratado.
    </About>
  </FooterContainer>
)

export default Footer
