import {
  Items,
  Tag,
  TagWrapper,
  ProductCard,
  Star,
  TitleContainer,
  Infos
} from './styles'

import estrela from '../../assets/images/estrela.png'

type ProductProps = {
  image: string
  title: string
  description: string
  rate: number
}

const Product = ({ image, title, description, rate }: ProductProps) => (
  <Items>
    <ProductCard style={{ position: 'relative' }}>
      <img src={image} alt={title} />
      <TagWrapper>
        <Tag>Destaque da semana</Tag>
        <Tag>Japonesa</Tag>
      </TagWrapper>
      <Infos>
        <TitleContainer>
          <h3>{title}</h3>
          <Star>
            {rate} <img src={estrela} alt="estrela" />
          </Star>
        </TitleContainer>
        <p>{description}</p>
        <button>Saiba mais</button>
      </Infos>
    </ProductCard>
  </Items>
)
export default Product
