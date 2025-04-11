import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    left: 470px;
    font-size: 32px;
    font-weight: 100;
    color: white;
  }

  h1 {
    position: absolute;
    bottom: 32px;
    left: 470px;
    font-size: 32px;
    color: white;
    font-weight: 900;
  }
`
