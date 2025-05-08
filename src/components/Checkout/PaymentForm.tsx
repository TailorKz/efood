import { Form } from './styles'

interface PaymentFormProps {
  onPrevious: () => void
}

const PaymentForm = ({ onPrevious }: PaymentFormProps) => {
  return (
    <Form>
      <h2>Pagamento - Valor a pagar R$ 190,90</h2>
      <label>
        Nome no cartão
        <input type="text" required />
      </label>
      <label>
        Número do cartão
        <input type="text" required />
      </label>
      <label>
        CVV
        <input type="text" required />
      </label>
      <label>
        Mês de vencimento
        <input type="text" required />
      </label>
      <label>
        Ano de vencimento
        <input type="text" required />
      </label>
      <button type="submit">Finalizar pagamento</button>
      <button type="button" onClick={onPrevious}>
        Voltar para a edição de endereço
      </button>
    </Form>
  )
}

export default PaymentForm
