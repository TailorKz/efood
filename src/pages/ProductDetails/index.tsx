import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Container } from './styles'
import Recept from './Recept'
import ProductBanner from '../../components/ProductBanner'

interface CardapioItem {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
}

const ProductDetails = () => {
  const location = useLocation()
  const { id, title, bannerImage, tag } = location.state
  const [cardapio, setCardapio] = useState<CardapioItem[]>([])

  useEffect(() => {
    // Fazendo a requisição para buscar o cardápio do restaurante
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((data) => setCardapio(data.cardapio))
      .catch((error) => console.error('Erro ao buscar cardápio:', error))
  }, [id])

  return (
    <Container>
      <ProductBanner />
      <div className="image-wrapper">
        <img className="productimage" src={bannerImage} alt={title} />
        <p className="tag">{tag}</p>
        <h1>{title}</h1>
      </div>
      <Recept cardapio={cardapio} />
    </Container>
  )
}

export default ProductDetails
