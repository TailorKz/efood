import { useFormik } from 'formik'
import { IMaskInput } from 'react-imask'
import * as Yup from 'yup'
import { Form, InlineGroup } from './styles'

interface DeliveryFormProps {
  onNext: () => void
  onClose: () => void
}

const DeliveryForm = ({ onNext, onClose }: DeliveryFormProps) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Digite somente letras')
        .min(3, 'Nome deve ter pelo menos 3 caracteres')
        .required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      cep: Yup.string()
        .matches(/^\d{5}-\d{3}$/, 'CEP deve conter 8 dígitos')
        .required('Campo obrigatório'),
      number: Yup.string().required('Campo obrigatório')
    }),
    onSubmit: (values) => {
      console.log(values)
      onNext()
    }
  })

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h2>Entrega</h2>
      <label>
        Quem irá receber
        <input
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.touched.name && formik.errors.name ? 'error' : ''}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="error-message">{formik.errors.name}</div>
        )}
      </label>
      <label>
        Endereço
        <input
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.touched.address && formik.errors.address ? 'error' : ''
          }
        />
        {formik.touched.address && formik.errors.address && (
          <div className="error-message">{formik.errors.address}</div>
        )}
      </label>
      <label>
        Cidade
        <input
          type="text"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={formik.touched.city && formik.errors.city ? 'error' : ''}
        />
        {formik.touched.city && formik.errors.city && (
          <div className="error-message">{formik.errors.city}</div>
        )}
      </label>
      <InlineGroup>
        <label>
          CEP
          <IMaskInput
            mask="00000-000"
            type="text"
            name="cep"
            value={formik.values.cep}
            onAccept={(value: any) => formik.setFieldValue('cep', value)}
            onBlur={formik.handleBlur}
            className={formik.touched.cep && formik.errors.cep ? 'error' : ''}
          />
          {formik.touched.cep && formik.errors.cep && (
            <div className="error-message">{formik.errors.cep}</div>
          )}
        </label>
        <label>
          Número
          <input
            type="text"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className={
              formik.touched.number && formik.errors.number ? 'error' : ''
            }
          />
          {formik.touched.number && formik.errors.number && (
            <div className="error-message">{formik.errors.number}</div>
          )}
        </label>
      </InlineGroup>
      <label className="margin-bottom">
        Complemento (opcional)
        <input
          type="text"
          name="complement"
          value={formik.values.complement}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </label>
      <button type="submit">Continuar com o pagamento</button>
      <button type="button" onClick={() => onClose()}>
        Voltar para o carrinho
      </button>
    </Form>
  )
}

export default DeliveryForm
