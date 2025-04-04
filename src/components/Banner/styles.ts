import styled from 'styled-components'
import { cores } from '../../styles'

export const BannerImg = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  align-items: center;
  flex-direction: column;

  img {
    width: 125px;
    height: 57.5px;
    margin-top: 64px;
  }
  h1 {
    display: block;
    margin-top: 138px;
    text-align: center;
    color: ${cores.first};
    font-size: 36px;
  }
`
