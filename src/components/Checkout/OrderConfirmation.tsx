import { OrderContainer, OrderText, OrderButton } from './styles'

interface OrderConfirmationProps {
  orderId: string
  onComplete: () => void
}

const OrderConfirmation = ({ orderId, onComplete }: OrderConfirmationProps) => {
  return (
    <OrderContainer>
      <h2>Pedido realizado - {orderId}</h2>
      <OrderText>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </OrderText>
      <OrderText>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados a
        realizar cobranças extras.
      </OrderText>
      <OrderText>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </OrderText>
      <OrderText>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </OrderText>
      <OrderButton onClick={onComplete}>Concluir</OrderButton>
    </OrderContainer>
  )
}

export default OrderConfirmation
