import { useEffect, useState } from 'react'
import Product from '.'
import { Container } from './styles'

interface Restaurant {
  destacado: boolean | undefined
  id: number
  titulo: string
  capa: string
  descricao: string
  avaliacao: number
  tipo: string
}

const ProductList = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((data) => setRestaurants(data))
      .catch((error) => console.error('Erro ao buscar restaurantes', error))
  }, [])

  return (
    <Container style={{ backgroundColor: '#fff8f1' }}>
      {restaurants.map((restaurant) => (
        <Product
          key={restaurant.id}
          id={restaurant.id}
          image={restaurant.capa}
          bannerImage={restaurant.capa}
          title={restaurant.titulo}
          description={restaurant.descricao}
          rate={restaurant.avaliacao}
          tag={restaurant.tipo}
          destacado={restaurant.destacado}
        />
      ))}
    </Container>
  )
}

export default ProductList
