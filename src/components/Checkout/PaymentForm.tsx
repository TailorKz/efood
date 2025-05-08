import { useFormik } from 'formik'
import * as Yup from 'yup'
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
  const formik = useFormik({
    initialValues: {
      cardName: '',
      cardNumber: '',
      cvv: '',
      expirationMonth: '',
      expirationYear: ''
    },
    validationSchema: Yup.object({
      cardName: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Digite somente letras')
        .min(3, 'Nome muito curto')
        .required('Campo obrigatório'),
      cardNumber: Yup.string()
        .matches(
          /^(?:\d{14}|\d{15}|\d{16})$/,
          'Número do cartão deve conter mais dígitos'
        )
        .required('Campo obrigatório'),
      cvv: Yup.string()
        .matches(/^\d{3,4}$/, 'CVV deve conter 3 ou 4 dígitos')
        .required('Campo obrigatório'),
      expirationMonth: Yup.string()
        .matches(/^\d{2}$/, 'Mês deve conter 2 dígitos')
        .required('Campo obrigatório'),
      expirationYear: Yup.string()
        .matches(/^\d{2}$/, 'Ano deve conter 2 dígitos')
        .required('Campo obrigatório')
    }),
    onSubmit: () => {
      onPaymentSuccess()
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h2>
        Pagamento - Valor a pagar{' '}
        {total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
      </h2>
      <label>
        Nome no cartão
        <input
          type="text"
          name="cardName"
          value={formik.values.cardName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.cardName && formik.errors.cardName ? 'error' : ''
          }
        />
        {formik.touched.cardName && formik.errors.cardName && (
          <div className="error-message">{formik.errors.cardName}</div>
        )}
      </label>
      <InlinePaymentGroup>
        <CardNumberLabel>
          Número do cartão
          <IMaskInput
            mask="0000000000000000"
            type="text"
            name="cardNumber"
            value={formik.values.cardNumber}
            unmask={true}
            onAccept={(value: any) => formik.setFieldValue('cardNumber', value)}
            onBlur={formik.handleBlur}
            className={
              formik.touched.cardNumber && formik.errors.cardNumber
                ? 'error'
                : ''
            }
          />
          {formik.touched.cardNumber && formik.errors.cardNumber && (
            <div className="error-message">{formik.errors.cardNumber}</div>
          )}
        </CardNumberLabel>
        <CVVLabel>
          CVV
          <input
            type="text"
            name="cvv"
            maxLength={4}
            value={formik.values.cvv}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={formik.touched.cvv && formik.errors.cvv ? 'error' : ''}
          />
          {formik.touched.cvv && formik.errors.cvv && (
            <div className="error-message">{formik.errors.cvv}</div>
          )}
        </CVVLabel>
      </InlinePaymentGroup>
      <InlineExpirationGroup>
        <ExpirationLabel>
          Mês de vencimento
          <IMaskInput
            mask="00"
            type="text"
            name="expirationMonth"
            value={formik.values.expirationMonth}
            unmask={true}
            onAccept={(value: any) =>
              formik.setFieldValue('expirationMonth', value)
            }
            onBlur={formik.handleBlur}
            className={
              formik.touched.expirationMonth && formik.errors.expirationMonth
                ? 'error'
                : ''
            }
          />
          {formik.touched.expirationMonth && formik.errors.expirationMonth && (
            <div className="error-message">{formik.errors.expirationMonth}</div>
          )}
        </ExpirationLabel>
        <ExpirationLabel>
          Ano de vencimento
          <IMaskInput
            mask="00"
            type="text"
            name="expirationYear"
            value={formik.values.expirationYear}
            unmask={true}
            onAccept={(value: any) =>
              formik.setFieldValue('expirationYear', value)
            }
            onBlur={formik.handleBlur}
            className={
              formik.touched.expirationYear && formik.errors.expirationYear
                ? 'error'
                : ''
            }
          />
          {formik.touched.expirationYear && formik.errors.expirationYear && (
            <div className="error-message">{formik.errors.expirationYear}</div>
          )}
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
