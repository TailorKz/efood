/* eslint-disable no-unused-vars */
import { useState } from 'react'
import DeliveryForm from './DeliveryForm'
import PaymentForm from './PaymentForm'
import OrderConfirmation from './OrderConfirmation'
import { Sidebar } from '../Cart/styles'
import { usePurchaseMutation } from '../../api/api'
import { PurchasePayload } from '../../api/api'

interface CheckoutProps {
  onCancel: () => void
  onComplete: () => void
  step: 'delivery' | 'payment' | 'order'
  setStep: (step: 'delivery' | 'payment' | 'order') => void
  total: number
  purchasePayload: PurchasePayload
}

const Checkout = ({
  onCancel,
  onComplete,
  step,
  setStep,
  total,
  purchasePayload
}: CheckoutProps) => {
  const [orderId, setOrderId] = useState<string>('')
  const [purchase] = usePurchaseMutation()

  const handleNextStep = () => setStep('payment')
  const handlePreviousStep = () => setStep('delivery')

  const handlePaymentSuccess = async () => {
    try {
      const data = await purchase(purchasePayload).unwrap()
      setOrderId(data.orderId)
      setStep('order')
    } catch (error) {
      console.error('Erro ao criar pedido:', error)
      alert('Ocorreu um erro ao processar o pedido. Tente novamente.')
    }
  }

  return (
    <Sidebar onClick={(e) => e.stopPropagation()}>
      {step === 'delivery' ? (
        <DeliveryForm onNext={handleNextStep} onClose={onCancel} />
      ) : step === 'payment' ? (
        <PaymentForm
          onPrevious={handlePreviousStep}
          total={total}
          onPaymentSuccess={handlePaymentSuccess}
        />
      ) : (
        <OrderConfirmation orderId={orderId || 'N/A'} onComplete={onComplete} />
      )}
    </Sidebar>
  )
}

export default Checkout
