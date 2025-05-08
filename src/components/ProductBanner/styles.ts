import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerImg = styled.div`
  width: 100%;
  height: 186px;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 530px) {
    flex-direction: column;
    height: 100%;
    gap: 10px;
    height: 186px;
    .first {
      display: none;
    }
  }
  h2 {
    font-size: 18px;
    color: ${cores.first};
    font-weight: 900;
  }
  img {
    width: 125px;
    height: 57.5px;
    @media (max-width: 1400px) {
      margin-left: 50px;
    }
    @media (max-width: 530px) {
      margin: 0 auto;
    }
  }
`
