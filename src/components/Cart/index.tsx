import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { remove, close } from '../../store/cartSlice'
import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'
import trash from '../../assets/images/lixeira-de-reciclagem-1.png'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const total = cartItems.reduce((acc, item) => acc + item.preco, 0)

  const handleRemove = (cartItemId: string) => {
    dispatch(remove(cartItemId))
  }

  const handleClose = () => {
    dispatch(close())
  }

  return (
    <CartContainer>
      <Overlay onClick={handleClose} />
      <Sidebar onClick={(e) => e.stopPropagation()}>
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.cartItemId}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <h3>{item.nome}</h3>
                <span>
                  {item.preco.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  })}
                </span>
              </div>
              <button
                type="button"
                onClick={() => handleRemove(item.cartItemId)}
              >
                <img src={trash} alt="Remover" />
              </button>
            </CartItem>
          ))}
        </ul>
        <Prices>
          <span>Valor total</span>
          <span>
            {total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
          </span>
        </Prices>
        <button title="Clique aqui para continuar com a compra" type="button">
          Continuar com a entrega
        </button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
