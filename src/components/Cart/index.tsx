import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../store/store'
import { remove, close } from '../../store/cartSlice'
import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'
import trash from '../../assets/images/lixeira-de-reciclagem-1.png'
import Checkout from '../Checkout'
import { PurchasePayload } from '../../api/api'

const Cart = () => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const total = cartItems.reduce((acc, item) => acc + item.preco, 0)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [checkoutStep, setCheckoutStep] = useState<
    'delivery' | 'payment' | 'order'
  >('delivery')

  const handleRemove = (cartItemId: string) => {
    dispatch(remove(cartItemId))
  }

  const handleReturnToCart = () => {
    setIsCheckoutOpen(false)
    setCheckoutStep('delivery')
  }

  const handleCloseCart = () => {
    dispatch(close())
    setIsCheckoutOpen(false)
    setCheckoutStep('delivery')
  }

  const handleProceedToDelivery = () => {
    if (cartItems.length === 0) {
      alert('Você deve adicionar um item ao carrinho')
      return
    }
    setIsCheckoutOpen(true)
  }

  const dummyPurchasePayload: PurchasePayload = {
    products: cartItems.map((item) => ({
      id: Number(item.cartItemId),
      price: item.preco
    })),
    delivery: {
      receiver: '',
      address: {
        description: '',
        city: '',
        zipCode: '',
        number: 0,
        complement: ''
      }
    },
    payment: {
      card: {
        name: '',
        number: '',
        code: 0,
        expires: {
          month: 0,
          year: 0
        }
      }
    }
  }

  return (
    <CartContainer>
      <Overlay onClick={handleCloseCart} />
      <Sidebar isCheckout={isCheckoutOpen} onClick={(e) => e.stopPropagation()}>
        {isCheckoutOpen ? (
          <Checkout
            onCancel={handleReturnToCart}
            onComplete={handleCloseCart}
            step={checkoutStep}
            setStep={setCheckoutStep}
            total={total}
            purchasePayload={dummyPurchasePayload}
          />
        ) : (
          <>
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
            <button
              title="Clique aqui para continuar com a entrega"
              type="button"
              onClick={handleProceedToDelivery}
            >
              Continuar com a entrega
            </button>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
