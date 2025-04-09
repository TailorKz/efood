import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 472px);
  column-gap: 80px;
  justify-content: center;
  padding-top: 80px;
  padding-bottom: 40px;
  background-color: ${cores.background};
`
export const Infos = styled.div`
  border: 1px solid ${cores.first};
`

export const Items = styled.div`
  display: flex;
  justify-content: center;
  max-width: 472px;
  h3 {
    font-size: 18px;
    margin-left: 7px;
    margin-bottom: 16px;
    color: ${cores.first};
    font-weight: 700;
  }
  p {
    font-size: 14px;
    line-height: 22px;
    margin-left: 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    color: ${cores.first};
  }

  button {
    align-self: start;
    padding: 4px 6px;
    background-color: ${cores.first};
    color: ${cores.white};
    border: none;
    margin-left: 8px;
    margin-bottom: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 700;
  }
`
export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 48px;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
`
export const Star = styled.span`
  display: flex;
  gap: 4px;
  font-weight: bold;
  color: ${cores.first};
  font-size: 18px;
  font-weight: 700;
  img {
    width: 21px;
    height: 21px;
    object-fit: contain;
    transform: translateY(-2px);
  }
`
export const Tag = styled.span`
  background-color: #e74c3c;
  color: white;
  padding: 8px 6px;
  font-size: 12px;
  font-weight: 700;
  font-weight: bold;
  margin-right: 8px;
  text-decoration: none;
`
export const TagWrapper = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
  display: flex;
  text-decoration: none;
`
