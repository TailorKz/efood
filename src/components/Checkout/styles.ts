import styled from 'styled-components'
import { cores } from '../../styles'

export const Form = styled.form`
  flex-direction: column;
  display: flex;
  color: ${cores.bege};
  gap: 8px;
  width: 100%;

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
