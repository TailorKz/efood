import {
  Container,
  Items,
  Tag,
  TagWrapper,
  ProductCard,
  Star,
  TitleContainer,
  Infos
} from './styles'
import estrela from '../../assets/images/estrela.png'
const Product = () => (
  <Container>
    <Items>
      <ProductCard style={{ position: 'relative' }}>
        <img src="https://picsum.photos/472/217" alt="" />
        <TagWrapper>
          <Tag>Destaque da semana</Tag>
          <Tag>Japonesa</Tag>
        </TagWrapper>
        <Infos>
          <TitleContainer>
            <h3>Hioki Sushi</h3>
            <Star>
              4.9 <img src={estrela} alt="estrela" />
            </Star>
          </TitleContainer>
          <p>
            Peça já o melhor da culinária japonesa no conforto da sua casa!
            Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis.
            Entrega rápida, embalagens cuidadosas e qualidade
            garantida.Experimente o Japão sem sair do lar com nosso delivery!
          </p>
          <button>Saiba mais</button>
        </Infos>
      </ProductCard>
    </Items>
    <Items>
      <ProductCard style={{ position: 'relative' }}>
        <img src="https://picsum.photos/472/217" alt="" />
        <TagWrapper>
          <Tag>Italiana</Tag>
        </TagWrapper>
        <Infos>
          <TitleContainer>
            <h3>La Dolce Vita Trattoria</h3>
            <Star>
              4.6 <img src={estrela} alt="estrela" />
            </Star>
          </TitleContainer>
          <p>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </p>
          <button>Saiba mais</button>
        </Infos>
      </ProductCard>
    </Items>
    <Items>
      <ProductCard style={{ position: 'relative' }}>
        <img src="https://picsum.photos/472/217" alt="" />
        <TagWrapper>
          <Tag>Italiana</Tag>
        </TagWrapper>
        <Infos>
          <TitleContainer>
            <h3>La Dolce Vita Trattoria</h3>
            <Star>
              4.6 <img src={estrela} alt="estrela" />
            </Star>
          </TitleContainer>
          <p>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </p>
          <button>Saiba mais</button>
        </Infos>
      </ProductCard>
    </Items>
    <Items>
      <ProductCard style={{ position: 'relative' }}>
        <img src="https://picsum.photos/472/217" alt="" />
        <TagWrapper>
          <Tag>Italiana</Tag>
        </TagWrapper>
        <Infos>
          <TitleContainer>
            <h3>La Dolce Vita Trattoria</h3>
            <Star>
              4.6 <img src={estrela} alt="estrela" />
            </Star>
          </TitleContainer>
          <p>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </p>
          <button>Saiba mais</button>
        </Infos>
      </ProductCard>
    </Items>
    <Items>
      <ProductCard style={{ position: 'relative' }}>
        <img src="https://picsum.photos/472/217" alt="" />
        <TagWrapper>
          <Tag>Italiana</Tag>
        </TagWrapper>
        <Infos>
          <TitleContainer>
            <h3>La Dolce Vita Trattoria</h3>
            <Star>
              4.6 <img src={estrela} alt="estrela" />
            </Star>
          </TitleContainer>
          <p>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </p>
          <button>Saiba mais</button>
        </Infos>
      </ProductCard>
    </Items>
    <Items>
      <ProductCard style={{ position: 'relative' }}>
        <img src="https://picsum.photos/472/217" alt="" />
        <TagWrapper>
          <Tag>Italiana</Tag>
        </TagWrapper>
        <Infos>
          <TitleContainer>
            <h3>La Dolce Vita Trattoria</h3>
            <Star>
              4.6 <img src={estrela} alt="estrela" />
            </Star>
          </TitleContainer>
          <p>
            A La Dolce Vita Trattoria leva a autêntica cozinha italiana até
            você! Desfrute de massas caseiras, pizzas deliciosas e risotos
            incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem
            embalados e sabor inesquecível. Peça já!
          </p>
          <button>Saiba mais</button>
        </Infos>
      </ProductCard>
    </Items>
  </Container>
)
export default Product
