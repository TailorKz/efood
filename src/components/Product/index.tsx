import { Link } from 'react-router-dom'
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
  bannerImage?: string
  tag: string
}

const Product = ({
  image,
  title,
  description,
  rate,
  bannerImage,
  tag
}: ProductProps) => (
  <Items>
    <ProductCard style={{ position: 'relative' }}>
      <img src={image} alt={title} />
      <TagWrapper>
        <Tag>Destaque da semana</Tag>
        <Tag>{tag}</Tag>
      </TagWrapper>
      <Infos>
        <TitleContainer>
          <h3>{title}</h3>
          <Star>
            {rate} <img src={estrela} alt="estrela" />
          </Star>
        </TitleContainer>
        <p>{description}</p>
        <Link
          to="/produto"
          state={{ image, title, description, rate, bannerImage, tag }}
        >
          <button>Saiba mais</button>
        </Link>
      </Infos>
    </ProductCard>
  </Items>
)
export default Product
