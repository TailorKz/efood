import React, { useState } from 'react'
import DeliveryForm from './DeliveryForm'
import PaymentForm from './PaymentForm'
import { Sidebar } from '../Cart/styles'

const Checkout = ({ onClose }: { onClose: () => void }) => {
  const [step, setStep] = useState<'delivery' | 'payment'>('delivery')

  const handleNextStep = () => setStep('payment')
  const handlePreviousStep = () => setStep('delivery')

  return (
    <Sidebar onClick={(e) => e.stopPropagation()}>
      {step === 'delivery' ? (
        <DeliveryForm onNext={handleNextStep} onClose={onClose} />
      ) : (
        <PaymentForm onPrevious={handlePreviousStep} onClose={onClose} />
      )}
    </Sidebar>
  )
}

export default Checkout
