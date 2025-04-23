import React from 'react'
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ItemImage,
  Content
} from './styles'

interface ModalItemProps {
  onClose: () => void
  item: {
    foto: string
    nome: string
    descricao: string
    preco: number
    porcao: string
  }
}

const ModalItem = ({ onClose, item }: ModalItemProps) => (
  <ModalOverlay>
    <ModalContent>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ItemImage src={item.foto} alt={item.nome} />
      <Content>
        <h2>{item.nome}</h2>
        <p>{item.descricao}</p> <br />
        <p>Serve: {item.porcao}</p>
        <button onClick={() => console.log('Adicionar ao carrinho')}>
          Adicionar ao carrinho - R$ {item.preco.toFixed(2)}
        </button>
      </Content>
    </ModalContent>
  </ModalOverlay>
)

export default ModalItem
