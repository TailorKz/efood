/* eslint-disable no-unused-vars */
import React from 'react'
import DeliveryForm from './DeliveryForm'
import PaymentForm from './PaymentForm'
import OrderConfirmation from './OrderConfirmation'
import { Sidebar } from '../Cart/styles'

interface CheckoutProps {
  onClose: () => void
  step: 'delivery' | 'payment' | 'order'
  setStep: (step: 'delivery' | 'payment' | 'order') => void
  total: number
}

const Checkout = ({ onClose, step, setStep, total }: CheckoutProps) => {
  const handleNextStep = () => setStep('payment')
  const handlePreviousStep = () => setStep('delivery')
  const handlePaymentSuccess = () => setStep('order')

  return (
    <Sidebar onClick={(e) => e.stopPropagation()}>
      {step === 'delivery' ? (
        <DeliveryForm onNext={handleNextStep} onClose={onClose} />
      ) : step === 'payment' ? (
        <PaymentForm
          onPrevious={handlePreviousStep}
          total={total}
          onPaymentSuccess={handlePaymentSuccess}
        />
      ) : (
        <OrderConfirmation orderId="ABC123" onComplete={onClose} />
      )}
    </Sidebar>
  )
}

export default Checkout
/* eslint-enable no-unused-vars */
