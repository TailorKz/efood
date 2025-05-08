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
    height: 350px;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 1;
    }

    .productimage {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }

    .tag,
    h1 {
      position: absolute;
      z-index: 2;
      color: white;
    }

    .tag {
      top: 25px;
      left: 420px;
      font-size: 32px;
      font-weight: 100;
    }

    h1 {
      bottom: 32px;
      left: 420px;
      font-size: 32px;
      font-weight: 900;
    }
    @media (max-width: 540px) {
      .tag,
      h1 {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
`
export const ReceptContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 32px;
  margin-top: 56px;
  width: 100%;
  max-width: 1024px;
  padding-bottom: 120px;
  @media (max-width: 672px) {
    width: 90%;
  }
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
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
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
