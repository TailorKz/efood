import styled from 'styled-components'
import { cores } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.8;
`
export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
`
export const Sidebar = styled.aside<{ isCheckout?: boolean }>`
  background-color: ${cores.first};
  z-index: 1;
  padding: ${({ isCheckout }) => (isCheckout ? '0' : '40px 8px 0 8px')};
  max-width: 360px;
  width: 100%;

  button {
    max-width: 100%;
    width: 100%;
    color: ${cores.first};
    background-color: ${cores.bege};
    border: none;
    font-size: 14px;
    font-weight: 700;
    padding: 4px 0 4px 0;
    cursor: pointer;
  }
`
export const Prices = styled.p`
  margin-bottom: 16px;
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 16px;
    color: ${cores.bege};
  }
`
export const CartItem = styled.li`
  display: flex;
  background-color: ${cores.bege};
  padding-bottom: 8px;
  padding-top: 8px;
  padding-left: 8px;
  position: relative;
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }
  h3 {
    font-size: 18px;
    font-weight: 900;
    color: ${cores.first};
    margin-bottom: 16px;
  }
  span {
    display: block;
    font-size: 14px;
    font-weight: 400;
    color: ${cores.first};
  }
  button {
    width: 24px;
    height: 24px;
    border: none;
    position: absolute;
    bottom: 8px;
    right: 8px;
    cursor: pointer;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`
