interface PaymentFormProps {
  onPrevious: () => void
  onClose: () => void
}

const PaymentForm = ({ onPrevious, onClose }: PaymentFormProps) => {
  return (
    <form>
      <h2>Pagamento - Valor a pagar R$ 190,90</h2>
      <label>
        Nome no cartão
        <input type="text" placeholder="Nome completo" required />
      </label>
      <label>
        Número do cartão
        <input type="text" placeholder="Número do cartão" required />
      </label>
      <label>
        CVV
        <input type="text" placeholder="CVV" required />
      </label>
      <label>
        Mês de vencimento
        <input type="text" placeholder="MM" required />
      </label>
      <label>
        Ano de vencimento
        <input type="text" placeholder="AAAA" required />
      </label>
      <button type="submit">Finalizar pagamento</button>
      <button type="button" onClick={onPrevious}>
        Voltar para a edição de endereço
      </button>
      <button type="button" onClick={onClose}>
        Cancelar pagamento
      </button>
    </form>
  )
}

export default PaymentForm
