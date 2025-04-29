import React from 'react'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/cartSlice'
import closeIcon from '../../assets/images/close_1.png'
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  ItemImage,
  Content
} from './styles'

interface ModalItemProps {
  onClose: () => void
  onAddToCart: () => void
  item: {
    id: number
    foto: string
    nome: string
    descricao: string
    preco: number
    porcao: string
  }
}

const ModalItem = ({ onClose, onAddToCart, item }: ModalItemProps) => {
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(add(item))
    dispatch(open())
    onAddToCart()
    onClose()
  }

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>
          <img src={closeIcon} alt="Fechar" />
        </CloseButton>
        <ItemImage src={item.foto} alt={item.nome} />
        <Content>
          <h2>{item.nome}</h2>
          <p>{item.descricao}</p>
          <p>Serve: {item.porcao}</p>
          <button onClick={handleAdd}>
            Adicionar ao carrinho - R${' '}
            {item.preco.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </button>
        </Content>
      </ModalContent>
    </ModalOverlay>
  )
}

export default ModalItem
