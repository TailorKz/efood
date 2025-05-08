import styled from 'styled-components'
import { cores } from '../../styles'

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

export const ModalContent = styled.div`
  background-color: ${cores.first};
  padding: 32px;
  width: 1024px;
  height: 344px;
  position: relative;
  display: flex;
  @media (max-width: 612px) {
    flex-direction: column;
    height: auto;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
  color: white;
  img {
    width: 16px;
    height: 16px;
  }
`

export const ItemImage = styled.img`
  width: 280px;
  height: 280px;
  object-fit: cover;
  background-position: center;
  margin-bottom: 16px;
`
export const Content = styled.div`
  margin-left: 24px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  color: ${cores.white};
  h2 {
    font-size: 24px;
    font-weight: 900;
    line-height: 100%;
  }
  p {
    font-size: 14px;
  }
  button {
    background-color: ${cores.bege};
    color: ${cores.first};
    border: none;
    font-size: 14px;
    font-weight: 700;
    padding: 8px 4px;
    cursor: pointer;
    max-width: 250px;
  }
`
