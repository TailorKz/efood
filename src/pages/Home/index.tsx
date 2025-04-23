import { useEffect } from 'react'
import Banner from '../../components/Banner'
import ProductList from '../../components/Product/ProductList'
export type Food = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}
const Home = () => {
  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes').then(
      (res) => res.json()
    )
  }, [])
  return (
    <>
      <Banner />
      <ProductList />
    </>
  )
}

export default Home
