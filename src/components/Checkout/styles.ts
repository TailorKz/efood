import styled from 'styled-components'
import { cores } from '../../styles'

export const Form = styled.form`
  flex-direction: column;
  display: flex;
  color: ${cores.bege};
  gap: 8px;
  width: 100%;
  input.error {
    border: 1px solid red;
  }

  .error-message {
    color: ${cores.bege};
    font-size: 12px;
  }
  button {
    cursor: pointer;
  }
  h2 {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 8px;
  }

  label {
    font-size: 14px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  input {
    height: 32px;
    width: 100%;
    padding: 4px;
    border: 1px solid ${cores.first};
    font-size: 14px;
    background-color: ${cores.bege};
  }

  .margin-bottom {
    margin-bottom: 16px;
  }
`
export const InlineGroup = styled.div`
  display: flex;
  gap: 34px;
  width: 100%;

  label {
    flex: 1;
  }
`
export const InlinePaymentGroup = styled.div`
  display: flex;
  gap: 30px;
`

export const CardNumberLabel = styled.label`
  width: 228px;
  display: flex;
  flex-direction: column;
`

export const CVVLabel = styled.label`
  width: 87px;
  display: flex;
  flex-direction: column;
`

export const InlineExpirationGroup = styled.div`
  display: flex;
  gap: 30px;
`

export const ExpirationLabel = styled.label`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const FinalizeButton = styled.button`
  margin-top: 16px;
  cursor: pointer;
`
export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const OrderText = styled.p`
  margin: 0;
  font-size: 14px;
  color: ${cores.bege};
  line-height: 22px;
  font-weight: 400;
`

export const OrderButton = styled.button`
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  margin-top: 8px;
`

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: ${cores.bege};
`
