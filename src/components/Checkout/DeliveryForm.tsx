import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

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
    onSubmit: (values: {
      name: string
      address: string
      city: string
      cep: string
      number: string
      complement?: string
    }) => {
      console.log(values)
      onNext()
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <h2>Entrega</h2>
      <label>
        Quem irá receber
        <input
          type="text"
          name="name"
          placeholder="Nome completo"
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
          placeholder="Endereço completo"
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
          placeholder="Cidade"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.city && formik.errors.city ? (
          <div>{formik.errors.city}</div>
        ) : null}
      </label>
      <label>
        CEP
        <input
          type="text"
          name="cep"
          placeholder="CEP"
          value={formik.values.cep}
          onChange={formik.handleChange}
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
          placeholder="Número"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.number && formik.errors.number ? (
          <div>{formik.errors.number}</div>
        ) : null}
      </label>
      <label>
        Complemento (opcional)
        <input
          type="text"
          name="complement"
          placeholder="Complemento"
          value={formik.values.complement}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </label>
      <button type="submit">Continuar com o pagamento</button>
      <button type="button" onClick={onClose}>
        Voltar para o carrinho
      </button>
    </form>
  )
}

export default DeliveryForm
