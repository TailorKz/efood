import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${cores.background};

  .image-wrapper {
    position: relative;
    width: 100%;
  }

  .productimage {
    width: 100%;
    height: 350px;
    object-fit: cover;
    object-position: center;
    display: block;
  }

  .tag {
    position: absolute;
    top: 25px;
    left: 420px;
    font-size: 32px;
    font-weight: 100;
    color: white;
  }

  h1 {
    position: absolute;
    bottom: 32px;
    left: 420px;
    font-size: 32px;
    color: white;
    font-weight: 900;
  }
`
export const PizzaContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin-top: 56px;
  width: 100%;
  max-width: 1024px;
  padding-bottom: 120px;
  div {
    background-color: ${cores.first};
    padding: 8px;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  img {
    width: 304px;
    height: 164px;
    object-fit: cover;
  }

  h3 {
    font-size: 16px;
    margin-top: 8px;
    color: ${cores.bege};
    font-weight: 900;
  }

  p {
    font-size: 14px;
    color: ${cores.bege};
    margin-top: 8px;
    font-weight: 400;
    line-height: 22px;
  }

  button {
    font-size: 14px;
    background-color: ${cores.bege};
    color: ${cores.first};
    border: none;
    margin-top: 8px;
    padding: 4px 80px;
    font-weight: 700;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #ffe2b3;
    }
  }
`
