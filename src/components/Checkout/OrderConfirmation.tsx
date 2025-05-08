import React from 'react'
import * as S from './styles'

interface OrderConfirmationProps {
  orderId: string
  onComplete: () => void
}

const OrderConfirmation = ({ orderId, onComplete }: OrderConfirmationProps) => {
  return (
    <S.OrderContainer>
      <S.Title>Pedido realizado - {orderId}</S.Title>
      <S.OrderText>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </S.OrderText>
      <S.OrderText>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </S.OrderText>
      <S.OrderText>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </S.OrderText>
      <S.OrderText>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </S.OrderText>
      <S.OrderButton onClick={onComplete}>Concluir</S.OrderButton>
    </S.OrderContainer>
  )
}

export default OrderConfirmation
