import React from 'react'
import { IMaskInput } from 'react-imask'
import {
  Form,
  InlinePaymentGroup,
  CardNumberLabel,
  CVVLabel,
  InlineExpirationGroup,
  ExpirationLabel,
  FinalizeButton
} from './styles'

interface PaymentFormProps {
  onPrevious: () => void
  total: number
  onPaymentSuccess: () => void
}

const PaymentForm = ({
  onPrevious,
  total,
  onPaymentSuccess
}: PaymentFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onPaymentSuccess()
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h2>
        Pagamento - Valor a pagar{' '}
        {total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </h2>
      <label>
        Nome no cartão
        <input type="text" required />
      </label>
      <InlinePaymentGroup>
        <CardNumberLabel>
          Número do cartão
          <IMaskInput mask="00" type="text" required />
        </CardNumberLabel>
        <CVVLabel>
          CVV
          <input type="text" required />
        </CVVLabel>
      </InlinePaymentGroup>
      <InlineExpirationGroup>
        <ExpirationLabel>
          Mês de vencimento
          <IMaskInput mask="00" type="text" required />
        </ExpirationLabel>
        <ExpirationLabel>
          Ano de vencimento
          <IMaskInput mask="00" type="text" required />
        </ExpirationLabel>
      </InlineExpirationGroup>
      <FinalizeButton type="submit">Finalizar pagamento</FinalizeButton>
      <button type="button" onClick={onPrevious}>
        Voltar para a edição de endereço
      </button>
    </Form>
  )
}

export default PaymentForm
