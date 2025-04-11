import Product from '.'
import { Container } from './styles'
import sushi from '../../assets/images/imagem.png'
import macaroni from '../../assets/images/image 1.png'
import macaroniBanner from '../../assets/images/imagem de fundo (1).png'

const ProductList = () => (
  <Container style={{ backgroundColor: 'fff8f1' }}>
    <Product
      image={sushi}
      bannerImage={macaroniBanner}
      title="Hioki Sushi"
      description="Peça já o melhor da culinária japonesa no conforto da sua casa!
        Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
        Entrega rápida, embalagens cuidadosas e qualidade garantida.
        Experimente o Japão sem sair do lar com nosso delivery!"
      rate={4.9}
      tag="Japonesa"
    />
    <Product
      image={macaroni}
      bannerImage={macaroniBanner}
      title="La Dolce Vita Trattoria"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
        você! Desfrute de massas caseiras, pizzas deliciosas e risotos
        incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
        embalados e sabor inesquecível. Peça já!"
      rate={4.6}
      tag="Italiana"
    />
    <Product
      image={macaroni}
      bannerImage={macaroniBanner}
      title="La Dolce Vita Trattoria"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
        você! Desfrute de massas caseiras, pizzas deliciosas e risotos
        incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
        embalados e sabor inesquecível. Peça já!"
      rate={4.6}
      tag="Italiana"
    />
    <Product
      image={macaroni}
      bannerImage={macaroniBanner}
      title="La Dolce Vita Trattoria"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
        você! Desfrute de massas caseiras, pizzas deliciosas e risotos
        incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
        embalados e sabor inesquecível. Peça já!"
      rate={4.6}
      tag="Italiana"
    />
    <Product
      image={macaroni}
      bannerImage={macaroniBanner}
      title="La Dolce Vita Trattoria"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
        você! Desfrute de massas caseiras, pizzas deliciosas e risotos
        incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
        embalados e sabor inesquecível. Peça já!"
      rate={4.6}
      tag="Italiana"
    />
    <Product
      image={macaroni}
      bannerImage={macaroniBanner}
      title="La Dolce Vita Trattoria"
      description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
        você! Desfrute de massas caseiras, pizzas deliciosas e risotos
        incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
        embalados e sabor inesquecível. Peça já!"
      rate={4.6}
      tag="Italiana"
    />
  </Container>
)

export default ProductList
