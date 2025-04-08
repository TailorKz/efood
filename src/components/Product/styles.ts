import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  column-gap: 80px;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 40px;
`
export const Items = styled.div`
  display: flex;
  justify-content: center;
  max-width: 472px;
  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    border: 1px solid ${cores.first};
    margin-bottom: 48px;
  }

  h3 {
    font-size: 18px;
    margin-left: 7px;
    margin-bottom: 16px;
    color: ${cores.first};
    font-weight: 700;
  }

  p {
    font-size: 14px;
    line-height: 1.4;
    margin-left: 8px;
    margin-bottom: 16px;
    color: ${cores.first};
  }

  button {
    align-self: start;
    padding: 8px 16px;
    background-color: ${cores.first};
    color: ${cores.white};
    border: none;
    margin-left: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
  }
`
export const Tag = styled.span`
  background-color: #e74c3c;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  margin-right: 4px;
`

export const TagWrapper = styled.div`
  position: absolute;
  top: 8px;
  left: 8px;
  display: flex;
  gap: 4px;
`
