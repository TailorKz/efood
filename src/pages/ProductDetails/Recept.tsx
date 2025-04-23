import { ReceptContainer } from './styles'

interface CardapioItem {
  id: number
  nome: string
  descricao: string
  preco: number
  porcao: string
  foto: string
}

interface ReceptProps {
  cardapio: CardapioItem[]
}

const Recept = ({ cardapio }: ReceptProps) => (
  <ReceptContainer>
    {cardapio && cardapio.length > 0 ? (
      cardapio.map((item) => (
        <div key={item.id}>
          <img src={item.foto} alt={item.nome} />
          <h3>{item.nome}</h3>
          <p>{item.descricao}</p>
          <button>Mais detalhes</button>
        </div>
      ))
    ) : (
      <p>Carregando cardápio...</p>
    )}
  </ReceptContainer>
)

export default Recept
