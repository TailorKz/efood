import React from 'react'
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
      name: Yup.string().required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      cep: Yup.string().required('Campo obrigatório'),
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
        />
        {formik.touched.name && formik.errors.name ? (
          <div>{formik.errors.name}</div>
        ) : null}
      </label>
      <label>
        Endereço
        <input
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.address && formik.errors.address ? (
          <div>{formik.errors.address}</div>
        ) : null}
      </label>
      <label>
        Cidade
        <input
          type="text"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.city && formik.errors.city ? (
          <div>{formik.errors.city}</div>
        ) : null}
      </label>
      <InlineGroup>
        <label>
          CEP
          <IMaskInput
            mask="00000-000"
            type="text"
            name="cep"
            placeholder="CEP"
            value={formik.values.cep}
            onAccept={(value: any) => formik.setFieldValue('cep', value)}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cep && formik.errors.cep ? (
            <div>{formik.errors.cep}</div>
          ) : null}
        </label>
        <label>
          Número
          <input
            type="text"
            name="number"
            value={formik.values.number}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.number && formik.errors.number ? (
            <div>{formik.errors.number}</div>
          ) : null}
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
