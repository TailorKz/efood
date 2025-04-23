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
  bannerImage?: string
  title: string
  description: string
  rate: number
  tag: string
  destacado?: boolean
}

const Product = ({
  image,
  title,
  description,
  rate,
  bannerImage,
  tag,
  destacado
}: ProductProps) => (
  <Items>
    <ProductCard style={{ position: 'relative' }}>
      <img src={image} alt={title} />
      <TagWrapper>
        {destacado && <Tag>Destaque da semana</Tag>} <Tag>{tag}</Tag>
      </TagWrapper>
      <Infos>
        <TitleContainer>
          <h3>{title}</h3>
          <Star>
            {rate} <img src={estrela} alt="estrela" />
          </Star>
        </TitleContainer>
        <p>{description}</p>
        <Link to="/produto" state={{ id: title, title, bannerImage, tag }}>
          <button>Saiba mais</button>
        </Link>
      </Infos>
    </ProductCard>
  </Items>
)

export default Product
