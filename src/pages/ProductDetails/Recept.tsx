import { useState } from 'react'
import { ReceptContainer } from './styles'
import ModalItem from '../../components/Modal'

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

const Recept = ({ cardapio }: ReceptProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState<CardapioItem | null>(null)

  const handleOpenModal = (item: CardapioItem) => {
    setSelectedItem(item)
    setModalOpen(true)
  }

  const handleCloseModal = () => {
    setModalOpen(false)
    setSelectedItem(null)
  }

  return (
    <>
      <ReceptContainer>
        {cardapio && cardapio.length > 0 ? (
          cardapio.map((item) => (
            <div key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <button onClick={() => handleOpenModal(item)}>
                Mais detalhes
              </button>
            </div>
          ))
        ) : (
          <p>Carregando cardápio...</p>
        )}
      </ReceptContainer>
      {modalOpen && selectedItem && (
        <ModalItem onClose={handleCloseModal} item={selectedItem} />
      )}
    </>
  )
}

export default Recept
